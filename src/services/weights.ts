import { characters } from '../sections/charSelect'

export type CharacterWeight = {
  name: string
  image: string
  dlc: boolean
  weight: number
}

export type WeightRange = CharacterWeight & {
  start: number
  end: number
}

const STORAGE_KEY = 'mk8d.weights'

const clampWeight = (value: number) => {
  if (Number.isNaN(value)) return 0
  return Math.max(0, Math.min(100, value))
}

const loadWeights = (): Record<string, number> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as Record<string, number>
  } catch {
    return {}
  }
}

const saveWeights = (weights: Record<string, number>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(weights))
  document.dispatchEvent(new CustomEvent('weights:updated'))
}

export const getWeightsList = (): CharacterWeight[] => {
  const weights = loadWeights()
  return characters.map((character) => ({
    ...character,
    weight: clampWeight(weights[character.name] ?? 100),
  }))
}

export const getWeightRanges = (weights: CharacterWeight[]): WeightRange[] => {
  let cursor = 1
  return weights
    .filter((item) => item.weight > 0)
    .map((item) => {
      const start = cursor
      const end = cursor + item.weight - 1
      cursor = end + 1
      return {
        ...item,
        start,
        end,
      }
    })
}

export const getTotalWeight = (ranges: WeightRange[]) => {
  if (ranges.length === 0) return 0
  return ranges[ranges.length - 1].end
}

export const initWeightsSection = () => {
  const inputs = Array.from(
    document.querySelectorAll<HTMLInputElement>('[data-weight-input]'),
  )
  const resetButton = document.querySelector<HTMLButtonElement>(
    '[data-reset-weights]',
  )

  if (inputs.length === 0) return

  const weights = loadWeights()

  inputs.forEach((input) => {
    const name = input.dataset.characterName
    if (!name) return
    const stored = clampWeight(weights[name] ?? 100)
    input.value = String(stored)

    input.addEventListener('input', () => {
      const value = clampWeight(Number(input.value))
      input.value = String(value)
      weights[name] = value
      saveWeights(weights)
    })
  })

  resetButton?.addEventListener('click', () => {
    inputs.forEach((input) => {
      const name = input.dataset.characterName
      if (!name) return
      input.value = '100'
      weights[name] = 100
    })
    saveWeights(weights)
  })
}
