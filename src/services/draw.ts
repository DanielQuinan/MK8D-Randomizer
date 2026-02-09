import { loadAllowRepeat, loadPlayers, type Player } from './players'
import { t } from './i18n'
import {
  getWeightsList,
  getWeightRanges,
  getTotalWeight,
  type CharacterWeight,
  type WeightRange,
} from './weights'

type DrawResult = {
  player: Player
  character: CharacterWeight
  roll: number
}

const fallbackCharacter: CharacterWeight = {
  name: t('fallbackCharacterName'),
  image: '/assets/MK8_Mario_Icon.png',
  dlc: false,
  weight: 0,
}

const pickFromRanges = (ranges: WeightRange[], roll: number) =>
  ranges.find((item) => roll >= item.start && roll <= item.end)

const drawOne = (pool: CharacterWeight[]) => {
  const ranges = getWeightRanges(pool)
  const total = getTotalWeight(ranges)
  if (total <= 0) return { picked: null, roll: 0, ranges }
  const roll = Math.floor(Math.random() * total) + 1
  const picked = pickFromRanges(ranges, roll) ?? null
  return { picked, roll, ranges }
}

const formatPlayerName = (player: Player, index: number) =>
  player.name.trim().length > 0
    ? player.name
    : t('playerFallbackName', { index: index + 1 })

const renderResults = (results: DrawResult[]) =>
  results
    .map(
      (result) => `
        <article class="result-card">
          <img
            src="${result.character.image}"
            alt="${result.character.name}"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            width="64"
            height="64"
          />
          <div>
            <h3>${result.player.name}</h3>
            <p>${result.character.name}</p>
            <span class="pill ${result.character.dlc ? 'pill-dlc' : 'pill-base'}">
              ${result.character.dlc ? t('dlcLabel') : t('baseLabel')}
            </span>
          </div>
        </article>
      `,
    )
    .join('')

export const initDrawSection = () => {
  const resultsGrid = document.querySelector<HTMLDivElement>(
    '[data-results-grid]',
  )
  const drawButtons = Array.from(
    document.querySelectorAll<HTMLButtonElement>('[data-run-draw]'),
  )

  if (!resultsGrid) return

  const runDraw = () => {
    const players = loadPlayers()
    const allowRepeat = loadAllowRepeat()
    const basePool = getWeightsList()
    let availablePool = [...basePool]
    const results: DrawResult[] = players.map((player) => {
      const currentPool = allowRepeat ? basePool : availablePool
      let eligiblePool = player.hasDlc
        ? currentPool
        : currentPool.filter((item) => !item.dlc)

      const { picked, roll } = drawOne(eligiblePool)

      if (!picked) {
        return {
          player,
          character: fallbackCharacter,
          roll: 0,
        }
      }

      if (!allowRepeat) {
        availablePool = availablePool.filter((item) => item.name !== picked.name)
      }

      return {
        player,
        character: picked,
        roll,
      }
    })

    resultsGrid.innerHTML = renderResults(
      results.map((result, index) => ({
        ...result,
        player: {
          ...result.player,
          name: formatPlayerName(result.player, index),
        },
      })),
    )
  }

  drawButtons.forEach((button) => {
    button.addEventListener('click', runDraw)
  })

  runDraw()
}
