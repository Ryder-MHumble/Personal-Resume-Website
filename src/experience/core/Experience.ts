import {
  ACESFilmicToneMapping,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { createHomeSceneControllers } from '../controllers/HomeSceneControllers'
import { HybridWorld } from '../world/HybridWorld'
import type { HomeSectionId } from '../../types/content'
import type {
  DeviceProfile,
  PointerState,
  ScrollSnapshot,
  SectionSpec,
  ViewportMetrics,
} from '../../types/runtime'

const finalPassShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uAberration: { value: 0.01 },
    uGrain: { value: 0.04 },
    uVignette: { value: 0.26 },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uAberration;
    uniform float uGrain;
    uniform float uVignette;

    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(41.13, 289.97))) * 45758.5453);
    }

    void main() {
      vec2 center = vUv - 0.5;
      vec2 shift = center * uAberration;

      float red = texture2D(tDiffuse, vUv + shift).r;
      float green = texture2D(tDiffuse, vUv).g;
      float blue = texture2D(tDiffuse, vUv - shift).b;

      vec3 color = vec3(red, green, blue);
      float grain = (noise(vUv * vec2(1680.0, 920.0) + uTime * 13.0) - 0.5) * uGrain;
      float vignette = smoothstep(uVignette, 0.98, length(center) * 1.42);

      color = mix(color, color * 0.62, vignette);
      color += grain;

      gl_FragColor = vec4(color, 1.0);
    }
  `,
}

const supportsWebgl = (canvas: HTMLCanvasElement) =>
  Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))

export class Experience {
  readonly isSupported: boolean

  private readonly scene: Scene

  private readonly camera: PerspectiveCamera

  private readonly renderer: WebGLRenderer | null

  private readonly composer: EffectComposer | null

  private readonly bloomPass: UnrealBloomPass | null

  private readonly finalPass: ShaderPass | null

  private readonly world: HybridWorld | null

  private readonly pointer: PointerState = { x: 0, y: 0 }

  private readonly viewport: ViewportMetrics = {
    width: 1,
    height: 1,
    dpr: 1,
  }

  private sectionSpecs: SectionSpec[] = []

  private readonly controllers: ReturnType<typeof createHomeSceneControllers> | null

  constructor(canvas: HTMLCanvasElement) {
    this.isSupported = supportsWebgl(canvas)
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(32, 1, 0.1, 120)
    this.camera.position.set(0, 0.2, 10.6)

    if (!this.isSupported) {
      this.renderer = null
      this.composer = null
      this.bloomPass = null
      this.finalPass = null
      this.world = null
      this.controllers = null
      return
    }

    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.08

    const composer = new EffectComposer(this.renderer)
    composer.addPass(new RenderPass(this.scene, this.camera))

    this.bloomPass = new UnrealBloomPass(new Vector2(1, 1), 0.34, 0.55, 0.88)
    composer.addPass(this.bloomPass)

    this.finalPass = new ShaderPass(finalPassShader)
    composer.addPass(this.finalPass)
    this.composer = composer

    this.world = new HybridWorld(this.scene)
    this.controllers = createHomeSceneControllers(this.world)
  }

  getSceneController(id: HomeSectionId) {
    return this.controllers?.[id] ?? null
  }

  async boot() {
    if (!this.isSupported || !this.composer) {
      return
    }

    this.composer.render()

    await new Promise<void>((resolve) => {
      window.requestAnimationFrame(() => {
        this.composer?.render()
        resolve()
      })
    })
  }

  setSections(sectionSpecs: SectionSpec[]) {
    this.sectionSpecs = sectionSpecs

    this.sectionSpecs.forEach((section) => {
      section.sceneController.resize?.(section, this.viewport)
    })
  }

  setPointer(pointer: PointerState) {
    this.pointer.x = pointer.x
    this.pointer.y = pointer.y
  }

  resize(viewport: ViewportMetrics) {
    this.viewport.width = viewport.width
    this.viewport.height = viewport.height
    this.viewport.dpr = viewport.dpr

    if (!this.renderer || !this.composer) {
      return
    }

    this.camera.aspect = viewport.width / viewport.height
    this.camera.updateProjectionMatrix()

    this.renderer.setPixelRatio(viewport.dpr)
    this.renderer.setSize(viewport.width, viewport.height)
    this.composer.setSize(viewport.width, viewport.height)
    this.composer.setPixelRatio(viewport.dpr)
  }

  update({
    time,
    delta,
    scroll,
    deviceProfile,
    reducedMotion,
  }: {
    time: number
    delta: number
    scroll: ScrollSnapshot
    deviceProfile: DeviceProfile
    reducedMotion: boolean
  }) {
    if (!this.isSupported || !this.world || !this.composer || !this.finalPass || !this.bloomPass) {
      return
    }

    this.world.beginFrame()

    this.sectionSpecs.forEach((section) => {
      const sectionState = scroll.sections[section.id]

      if (!sectionState) {
        return
      }

      section.sceneController.update({
        progress: sectionState.progress,
        velocity: scroll.velocity,
        pointer: this.pointer,
        section,
        scroll,
        deviceProfile,
        time,
        delta,
        reducedMotion,
      })
    })

    this.world.update({
      time,
      delta,
      pointer: this.pointer,
      camera: this.camera,
      deviceProfile,
      reducedMotion,
    })

    const fx = this.world.getPostFxTargets()

    this.bloomPass.strength = fx.bloom
    this.bloomPass.radius = 0.5
    this.bloomPass.threshold = 0.92
    this.finalPass.uniforms.uTime.value = time
    this.finalPass.uniforms.uAberration.value = fx.chroma
    this.finalPass.uniforms.uGrain.value = fx.grain
    this.finalPass.uniforms.uVignette.value = fx.vignette

    this.composer.render()
  }

  dispose() {
    this.world?.dispose()
    this.composer?.dispose()
    this.renderer?.dispose()
    this.scene.clear()
  }
}
