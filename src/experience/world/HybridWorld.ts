import {
  AdditiveBlending,
  AmbientLight,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  DirectionalLight,
  Float32BufferAttribute,
  Group,
  InstancedMesh,
  MathUtils,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  TubeGeometry,
  Vector3,
  CylinderGeometry,
  FogExp2,
} from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { DeviceProfile, PointerState } from '../../types/runtime'
import { damp } from '../../utils/math'

interface WorldChannels {
  fieldOpacity: number
  ribbonOpacity: number
  particleOpacity: number
  darkness: number
  bloom: number
  chroma: number
  vignette: number
  clusterScale: number
  clusterY: number
  clusterX: number
  clusterDepth: number
  cameraY: number
  cameraZ: number
  clusterRotation: number
  blueEnergy: number
  cameraRoll: number
  focusZoom: number
  ribbonDrift: number
  particleSpread: number
  energyPulse: number
}

interface OrbiterSpec {
  radius: number
  height: number
  depth: number
  scale: number
  speed: number
  phase: number
}

const channelKeys: Array<keyof WorldChannels> = [
  'fieldOpacity',
  'ribbonOpacity',
  'particleOpacity',
  'darkness',
  'bloom',
  'chroma',
  'vignette',
  'clusterScale',
  'clusterY',
  'clusterX',
  'clusterDepth',
  'cameraY',
  'cameraZ',
  'clusterRotation',
  'blueEnergy',
  'cameraRoll',
  'focusZoom',
  'ribbonDrift',
  'particleSpread',
  'energyPulse',
]

const defaults: WorldChannels = {
  fieldOpacity: 0.84,
  ribbonOpacity: 0.18,
  particleOpacity: 0.28,
  darkness: 0.06,
  bloom: 0.36,
  chroma: 0.008,
  vignette: 0.28,
  clusterScale: 1,
  clusterY: 0,
  clusterX: 0,
  clusterDepth: 0,
  cameraY: 0.2,
  cameraZ: 10.6,
  clusterRotation: 0,
  blueEnergy: 0.38,
  cameraRoll: 0,
  focusZoom: 0,
  ribbonDrift: 0.18,
  particleSpread: 1,
  energyPulse: 0.12,
}

const lightBackground = new Color('#edf1fa')
const darkBackground = new Color('#05070d')

const makeHubGeometry = () => {
  const armY = new CylinderGeometry(0.2, 0.2, 2, 24)
  const armX = armY.clone()
  armX.rotateZ(Math.PI * 0.5)

  const armZ = armY.clone()
  armZ.rotateX(Math.PI * 0.5)

  const cap = new SphereGeometry(0.4, 18, 18)

  return mergeGeometries([armY, armX, armZ, cap], false)
}

const createParticleGeometry = (count: number) => {
  const geometry = new BufferGeometry()
  const positions = new Float32Array(count * 3)

  for (let index = 0; index < count; index += 1) {
    const stride = index * 3

    positions[stride] = (Math.random() - 0.5) * 24
    positions[stride + 1] = (Math.random() - 0.5) * 18
    positions[stride + 2] = (Math.random() - 0.5) * 24
  }

  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))

  return geometry
}

const createRibbons = () => {
  const curves = [
    [
      new Vector3(-7.5, -2.2, -4),
      new Vector3(-3.5, 2.3, -2.2),
      new Vector3(0.2, 0.4, 1.5),
      new Vector3(5.2, -3.1, 2.8),
      new Vector3(7.2, 1.2, 3.6),
    ],
    [
      new Vector3(-8.2, 2.6, 3.5),
      new Vector3(-4.5, 0.2, 1.2),
      new Vector3(0, -1.6, -1.5),
      new Vector3(4.5, 1.3, -2.5),
      new Vector3(7.5, -2.1, -4.5),
    ],
    [
      new Vector3(-6.8, 4.2, -3),
      new Vector3(-2.5, 2.4, -0.4),
      new Vector3(2.2, 3.2, 1.2),
      new Vector3(5.8, 2.1, 3.1),
      new Vector3(8, 3.4, 4.2),
    ],
  ]

  return curves.map((points, index) => {
    const curve = new CatmullRomCurve3(points)
    const geometry = new TubeGeometry(curve, 120, 0.06 + index * 0.018, 12, false)
    const material = new MeshStandardMaterial({
      color: index === 1 ? '#2a45ff' : '#7b89ff',
      transparent: true,
      opacity: 0.35,
      roughness: 0.26,
      metalness: 0.08,
      emissive: new Color(index === 1 ? '#1d34e6' : '#394cff'),
      emissiveIntensity: index === 1 ? 0.35 : 0.18,
    })

    return new Mesh(geometry, material)
  })
}

export class HybridWorld {
  private readonly scene: Scene

  private readonly root = new Group()

  private readonly ribbons = new Group()

  private readonly orbiterDummy = new Object3D()

  private readonly orbiters: OrbiterSpec[] = []

  private readonly instanceMesh: InstancedMesh

  private readonly instanceMaterial: MeshPhysicalMaterial

  private readonly particleCloud: Points

  private readonly particleMaterial: PointsMaterial

  private readonly ambientLight = new AmbientLight('#f0f5ff', 1.8)

  private readonly sunLight = new DirectionalLight('#ffffff', 1.4)

  private readonly blueLight = new DirectionalLight('#4165ff', 1.3)

  private readonly background = new Color(lightBackground)

  private readonly weights: WorldChannels = { ...defaults }

  private readonly totals: WorldChannels = { ...defaults }

  private readonly target: WorldChannels = { ...defaults }

  private readonly current: WorldChannels = { ...defaults }

  constructor(scene: Scene) {
    this.scene = scene
    this.scene.fog = new FogExp2(lightBackground, 0.045)

    this.instanceMaterial = new MeshPhysicalMaterial({
      color: '#f3f6ff',
      roughness: 0.14,
      metalness: 0.06,
      clearcoat: 0.72,
      clearcoatRoughness: 0.18,
      transparent: true,
      opacity: 0.94,
      emissive: new Color('#1c33d9'),
      emissiveIntensity: 0.12,
    })

    this.instanceMesh = new InstancedMesh(makeHubGeometry(), this.instanceMaterial, 34)
    this.instanceMesh.instanceMatrix.setUsage(35048)

    const palette = ['#f7fbff', '#181a24', '#2747ff', '#d8ddff']
    const color = new Color()

    for (let index = 0; index < 34; index += 1) {
      this.orbiters.push({
        radius: MathUtils.randFloat(3.2, 7.4),
        height: MathUtils.randFloat(1.1, 4.2),
        depth: MathUtils.randFloat(1.2, 3.6),
        scale: MathUtils.randFloat(0.48, 1.22),
        speed: MathUtils.randFloat(0.1, 0.26),
        phase: MathUtils.randFloat(0, Math.PI * 2),
      })

      color.set(palette[index % palette.length])
      this.instanceMesh.setColorAt(index, color)
    }

    this.instanceMesh.instanceColor!.needsUpdate = true
    this.root.add(this.instanceMesh)

    createRibbons().forEach((mesh) => this.ribbons.add(mesh))
    this.root.add(this.ribbons)

    this.particleMaterial = new PointsMaterial({
      color: '#cad6ff',
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.38,
      blending: AdditiveBlending,
      depthWrite: false,
    })

    this.particleCloud = new Points(createParticleGeometry(96), this.particleMaterial)
    this.root.add(this.particleCloud)

    this.sunLight.position.set(8, 6, 10)
    this.blueLight.position.set(-5, -1, 6)

    this.scene.add(this.ambientLight)
    this.scene.add(this.sunLight)
    this.scene.add(this.blueLight)
    this.scene.add(this.root)
  }

  beginFrame() {
    channelKeys.forEach((key) => {
      this.weights[key] = 0
      this.totals[key] = 0
    })
  }

  mixIn(patch: Partial<WorldChannels>, weight = 1) {
    for (const key of channelKeys) {
      const value = patch[key]

      if (value === undefined) {
        continue
      }

      this.totals[key] += value * weight
      this.weights[key] += weight
    }
  }

  private resolveTarget() {
    channelKeys.forEach((key) => {
      this.target[key] =
        this.weights[key] > 0
          ? this.totals[key] / this.weights[key]
          : defaults[key]
    })
  }

  update({
    time,
    delta,
    pointer,
    camera,
    deviceProfile,
    reducedMotion,
  }: {
    time: number
    delta: number
    pointer: PointerState
    camera: PerspectiveCamera
    deviceProfile: DeviceProfile
    reducedMotion: boolean
  }) {
    this.resolveTarget()

    channelKeys.forEach((key) => {
      this.current[key] = damp(this.current[key], this.target[key], 5.5, delta)
    })

    const pointerScale = reducedMotion ? 0.12 : deviceProfile === 'mobileLite' ? 0.18 : 0.31

    this.root.position.set(
      this.current.clusterX + pointer.x * pointerScale,
      this.current.clusterY + pointer.y * (pointerScale * 0.55),
      this.current.clusterDepth,
    )
    this.root.rotation.y = time * 0.12 + this.current.clusterRotation + pointer.x * 0.05
    this.root.rotation.x = time * 0.04 + pointer.y * 0.03
    this.root.scale.setScalar(1 + this.current.focusZoom * 0.04)

    for (let index = 0; index < this.orbiters.length; index += 1) {
      const orbiter = this.orbiters[index]
      const angle = time * orbiter.speed + orbiter.phase + this.current.clusterRotation
      const radius = orbiter.radius * this.current.clusterScale
      const scale = orbiter.scale * this.current.clusterScale

      this.orbiterDummy.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.9) * orbiter.height,
        Math.sin(angle * 1.15) * orbiter.depth,
      )
      this.orbiterDummy.rotation.set(angle * 0.4, angle * 0.65, angle * 0.52)
      this.orbiterDummy.scale.setScalar(scale)
      this.orbiterDummy.updateMatrix()
      this.instanceMesh.setMatrixAt(index, this.orbiterDummy.matrix)
    }

    this.instanceMesh.instanceMatrix.needsUpdate = true
    this.instanceMaterial.opacity = 0.25 + this.current.fieldOpacity * 0.7
    this.instanceMaterial.emissiveIntensity = 0.06 + this.current.blueEnergy * 0.28

    this.ribbons.children.forEach((child: Object3D, index: number) => {
      const ribbon = child as Mesh
      const material = ribbon.material as MeshStandardMaterial
      const drift = this.current.ribbonDrift * (index === 1 ? 1.1 : 0.8)

      ribbon.rotation.z = time * (0.1 + index * 0.05) * drift
      ribbon.rotation.y = time * (0.05 + index * 0.03) * drift
      ribbon.position.x = Math.sin(time * (0.12 + index * 0.03)) * this.current.ribbonDrift * 0.42
      material.opacity = this.current.ribbonOpacity * (index === 1 ? 0.84 : 0.52)
      material.emissiveIntensity =
        this.current.blueEnergy * (index === 1 ? 0.58 : 0.22) +
        this.current.energyPulse * 0.12
    })

    this.particleCloud.rotation.y = -time * 0.03
    this.particleCloud.rotation.x = time * 0.016
    this.particleMaterial.opacity = this.current.particleOpacity
    this.particleCloud.scale.setScalar(this.current.particleSpread)

    this.background.lerpColors(lightBackground, darkBackground, this.current.darkness)
    this.scene.background = this.background
    ;(this.scene.fog as FogExp2).color.copy(this.background)
    ;(this.scene.fog as FogExp2).density = MathUtils.lerp(0.036, 0.064, this.current.darkness)

    this.ambientLight.intensity = MathUtils.lerp(1.6, 0.7, this.current.darkness)
    this.sunLight.intensity = MathUtils.lerp(1.45, 0.82, this.current.darkness)
    this.blueLight.intensity =
      1 + this.current.blueEnergy * 1.15 + Math.sin(time * 1.8) * this.current.energyPulse * 0.16

    camera.position.x = damp(camera.position.x, this.current.clusterX * 0.22, 4.6, delta)
    camera.position.y = damp(camera.position.y, this.current.cameraY, 4.6, delta)
    camera.position.z = damp(camera.position.z, this.current.cameraZ, 4.6, delta)
    camera.lookAt(0, this.current.clusterY * 0.16, 0)
    camera.rotation.z = damp(camera.rotation.z, this.current.cameraRoll, 4.6, delta)

    const targetFov = 32 - this.current.focusZoom * 1.8

    if (Math.abs(camera.fov - targetFov) > 0.01) {
      camera.fov = damp(camera.fov, targetFov, 4.6, delta)
      camera.updateProjectionMatrix()
    }
  }

  getPostFxTargets() {
    return {
      bloom: this.current.bloom,
      chroma: this.current.chroma,
      vignette: this.current.vignette,
      grain: MathUtils.lerp(0.035, 0.08, this.current.darkness) + this.current.energyPulse * 0.012,
    }
  }

  dispose() {
    this.instanceMesh.geometry.dispose()
    this.instanceMaterial.dispose()
    this.particleCloud.geometry.dispose()
    this.particleMaterial.dispose()

    this.ribbons.children.forEach((child: Object3D) => {
      const mesh = child as Mesh
      mesh.geometry.dispose()
      ;(mesh.material as MeshStandardMaterial).dispose()
    })
  }
}
