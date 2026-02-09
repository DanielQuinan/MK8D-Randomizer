import { t } from './i18n'

export type Player = {
  id: string
  name: string
  hasDlc: boolean
}

const STORAGE_KEYS = {
  players: 'mk8d.players',
  allowRepeat: 'mk8d.allowRepeat',
} as const

const createId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `player-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const createDefaultPlayers = (count = 4): Player[] =>
  Array.from({ length: count }, () => ({
    id: createId(),
    name: '',
    hasDlc: false,
  }))

export const loadPlayers = (): Player[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.players)
    if (!raw) return createDefaultPlayers()
    const parsed = JSON.parse(raw) as Player[]
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return createDefaultPlayers()
    }
    return parsed
  } catch {
    return createDefaultPlayers()
  }
}

const savePlayers = (players: Player[]) => {
  localStorage.setItem(STORAGE_KEYS.players, JSON.stringify(players))
}

export const loadAllowRepeat = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.allowRepeat) === 'true'
  } catch {
    return false
  }
}

const saveAllowRepeat = (value: boolean) => {
  localStorage.setItem(STORAGE_KEYS.allowRepeat, String(value))
}

const renderPlayerRow = (player: Player) => `
  <div class="name-row" data-player-id="${player.id}">
    <input
      type="text"
      placeholder="${t('playerNamePlaceholder')}"
      value="${player.name.replace(/"/g, '&quot;')}"
      data-player-name
    />
    <label class="checkbox">
      <input type="checkbox" ${player.hasDlc ? 'checked' : ''} data-player-dlc />
      <span>${t('hasDlc')}</span>
    </label>
    <button class="btn ghost small" type="button" data-remove-player>
      ${t('remove')}
    </button>
  </div>
`

export const initPlayersSection = () => {
  const list = document.querySelector<HTMLDivElement>('[data-players-list]')
  const addButton = document.querySelector<HTMLButtonElement>('[data-add-player]')
  const allowRepeat = document.querySelector<HTMLInputElement>(
    '[data-allow-repeat]',
  )

  if (!list || !addButton || !allowRepeat) return

  let players = loadPlayers()
  allowRepeat.checked = loadAllowRepeat()

  const render = () => {
    list.innerHTML = players.map(renderPlayerRow).join('')
  }

  const updatePlayer = (id: string, partial: Partial<Player>) => {
    players = players.map((player) =>
      player.id === id ? { ...player, ...partial } : player,
    )
    savePlayers(players)
  }

  render()

  addButton.addEventListener('click', () => {
    players = [...players, { id: createId(), name: '', hasDlc: false }]
    savePlayers(players)
    render()
  })

  list.addEventListener('input', (event) => {
    const target = event.target as HTMLElement
    const row = target.closest<HTMLDivElement>('[data-player-id]')
    if (!row) return
    const id = row.dataset.playerId
    if (!id) return

    if (target.matches('[data-player-name]')) {
      updatePlayer(id, { name: (target as HTMLInputElement).value })
    }

    if (target.matches('[data-player-dlc]')) {
      updatePlayer(id, { hasDlc: (target as HTMLInputElement).checked })
    }
  })

  list.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.matches('[data-remove-player]')) return
    const row = target.closest<HTMLDivElement>('[data-player-id]')
    if (!row) return
    const id = row.dataset.playerId
    if (!id) return

    players = players.filter((player) => player.id !== id)
    if (players.length === 0) {
      players = createDefaultPlayers(1)
    }
    savePlayers(players)
    render()
  })

  allowRepeat.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement
    saveAllowRepeat(target.checked)
  })
}
