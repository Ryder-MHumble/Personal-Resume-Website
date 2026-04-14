import type { SceneController } from '../../types/runtime'
import { clamp, smoothstep } from '../../utils/math'
import { HybridWorld } from '../world/HybridWorld'

const getWeight = (
  controller: SceneController,
  sections: Record<string, { focusWeight: number }>,
) => clamp(sections[controller.id]?.focusWeight ?? 0, 0, 1)

export const createHomeSceneControllers = (world: HybridWorld) => {
  const hero: SceneController = {
    id: 'hero',
    update(context) {
      const weight = getWeight(hero, context.scroll.sections)
      const kineticAberration = clamp(Math.abs(context.velocity) * 0.0011, 0.004, 0.018)

      world.mixIn(
        {
          fieldOpacity: 0.86,
          ribbonOpacity: 0.14,
          particleOpacity: 0.16,
          darkness: 0.04,
          bloom: 0.24,
          chroma: kineticAberration,
          vignette: 0.18,
          clusterScale: 0.96 - context.progress * 0.08,
          clusterY: 0.36 - context.progress * 0.48,
          clusterX: 0.74 + context.pointer.x * 0.08,
          clusterDepth: 0.84 - context.progress * 0.36,
          cameraY: -0.04 + context.progress * 0.12,
          cameraZ: 11.2 - context.progress * 0.42,
          clusterRotation: context.progress * 0.14,
          blueEnergy: 0.34,
          cameraRoll: context.pointer.x * 0.004,
          focusZoom: 0.18 - context.progress * 0.08,
          ribbonDrift: 0.22,
          particleSpread: 0.84,
          energyPulse: 0.1,
        },
        weight,
      )
    },
  }

  const proof: SceneController = {
    id: 'proof',
    update(context) {
      const weight = getWeight(proof, context.scroll.sections)
      const reveal = smoothstep(0, 1, context.progress)

      world.mixIn(
        {
          fieldOpacity: 0.78,
          ribbonOpacity: 0.26,
          particleOpacity: 0.18,
          darkness: 0.08,
          bloom: 0.28,
          chroma: 0.008 + Math.abs(context.velocity) * 0.0005,
          vignette: 0.28,
          clusterScale: 1.02 + reveal * 0.12,
          clusterY: -0.28 + reveal * 0.58,
          clusterX: 1.2 - reveal * 0.62,
          clusterDepth: 0.4 + reveal * 0.2,
          cameraY: 0.22,
          cameraZ: 9.5,
          clusterRotation: 0.82 + reveal * 0.3,
          blueEnergy: 0.58,
          cameraRoll: -0.004 + reveal * 0.006,
          focusZoom: 0.26,
          ribbonDrift: 0.9,
          particleSpread: 0.94,
          energyPulse: 0.18,
        },
        weight,
      )
    },
  }

  const featured: SceneController = {
    id: 'featured',
    update(context) {
      const weight = getWeight(featured, context.scroll.sections)
      const drift = smoothstep(0, 1, context.progress)

      world.mixIn(
        {
          fieldOpacity: 0.64,
          ribbonOpacity: 0.24,
          particleOpacity: 0.12,
          darkness: 0.14,
          bloom: 0.18,
          chroma: 0.006,
          vignette: 0.3,
          clusterScale: 0.86,
          clusterY: -1.25 + drift * 0.4,
          clusterX: -1.6 + drift * 0.8,
          clusterDepth: -0.8,
          cameraY: 0.68,
          cameraZ: 10.7,
          clusterRotation: 1.1 + drift * 0.2,
          blueEnergy: 0.34,
          cameraRoll: 0.012,
          focusZoom: 0.1,
          ribbonDrift: 0.42,
          particleSpread: 0.82,
          energyPulse: 0.1,
        },
        weight,
      )
    },
  }

  const timeline: SceneController = {
    id: 'timeline',
    update(context) {
      const weight = getWeight(timeline, context.scroll.sections)
      const pressure = smoothstep(0, 1, context.progress)

      world.mixIn(
        {
          fieldOpacity: 0.96,
          ribbonOpacity: 0.38,
          particleOpacity: 0.22,
          darkness: 0.92,
          bloom: 0.32,
          chroma: 0.01 + Math.abs(context.velocity) * 0.0004,
          vignette: 0.42,
          clusterScale: 1.08 + pressure * 0.1,
          clusterY: 0.2,
          clusterX: context.pointer.x * 0.18,
          clusterDepth: 1.6,
          cameraY: -0.18,
          cameraZ: 9.16,
          clusterRotation: 1.54 + pressure * 0.26,
          blueEnergy: 0.78,
          cameraRoll: 0.003 + pressure * 0.005,
          focusZoom: 0.22 + pressure * 0.08,
          ribbonDrift: 0.52,
          particleSpread: 0.92,
          energyPulse: 0.14,
        },
        weight,
      )
    },
  }

  const links: SceneController = {
    id: 'links',
    update(context) {
      const weight = getWeight(links, context.scroll.sections)
      const settle = smoothstep(0, 1, context.progress)

      world.mixIn(
        {
          fieldOpacity: 0.72,
          ribbonOpacity: 0.36,
          particleOpacity: 0.18,
          darkness: 0.22,
          bloom: 0.2,
          chroma: 0.006,
          vignette: 0.32,
          clusterScale: 0.98,
          clusterY: 0.44 - settle * 0.2,
          clusterX: 0.52,
          clusterDepth: 0.18,
          cameraY: 0.18,
          cameraZ: 9.7,
          clusterRotation: 1.86 + settle * 0.16,
          blueEnergy: 0.52,
          cameraRoll: -0.003,
          focusZoom: 0.12,
          ribbonDrift: 0.34,
          particleSpread: 0.72,
          energyPulse: 0.08,
        },
        weight,
      )
    },
  }

  const insights: SceneController = {
    id: 'insights',
    update(context) {
      const weight = getWeight(insights, context.scroll.sections)
      const drift = smoothstep(0, 1, context.progress)

      world.mixIn(
        {
          fieldOpacity: 0.82,
          ribbonOpacity: 0.44,
          particleOpacity: 0.24,
          darkness: 0.16,
          bloom: 0.22,
          chroma: 0.007,
          vignette: 0.3,
          clusterScale: 1.08,
          clusterY: 0.2 - drift * 0.28,
          clusterX: -0.2 + drift * 0.36,
          clusterDepth: 0.48,
          cameraY: 0.26,
          cameraZ: 9.2,
          clusterRotation: 2.18 + drift * 0.18,
          blueEnergy: 0.6,
          cameraRoll: 0.01,
          focusZoom: 0.22,
          ribbonDrift: 0.52,
          particleSpread: 0.88,
          energyPulse: 0.16,
        },
        weight,
      )
    },
  }

  const contact: SceneController = {
    id: 'contact',
    update(context) {
      const weight = getWeight(contact, context.scroll.sections)
      const settle = smoothstep(0, 1, context.progress)

      world.mixIn(
        {
          fieldOpacity: 0.74,
          ribbonOpacity: 0.42,
          particleOpacity: 0.14,
          darkness: 0.22,
          bloom: 0.18,
          chroma: 0.006,
          vignette: 0.34,
          clusterScale: 1.04 + settle * 0.08,
          clusterY: 0.52,
          clusterX: 0.45,
          clusterDepth: 0.4,
          cameraY: 0.14,
          cameraZ: 9.5,
          clusterRotation: 1.95 + settle * 0.12,
          blueEnergy: 0.6,
          cameraRoll: -0.008,
          focusZoom: 0.08,
          ribbonDrift: 0.4,
          particleSpread: 0.84,
          energyPulse: 0.12,
        },
        weight,
      )
    },
  }

  return {
    hero,
    proof,
    featured,
    timeline,
    links,
    insights,
    contact,
  }
}
