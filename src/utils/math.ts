export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export const lerp = (from: number, to: number, alpha: number) =>
  from + (to - from) * alpha

export const damp = (
  from: number,
  to: number,
  lambda: number,
  delta: number,
) => lerp(from, to, 1 - Math.exp(-lambda * delta))

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => {
  if (inMax === inMin) {
    return outMin
  }

  const progress = (value - inMin) / (inMax - inMin)

  return outMin + (outMax - outMin) * progress
}

export const smoothstep = (edge0: number, edge1: number, value: number) => {
  const x = clamp((value - edge0) / (edge1 - edge0), 0, 1)

  return x * x * (3 - 2 * x)
}
