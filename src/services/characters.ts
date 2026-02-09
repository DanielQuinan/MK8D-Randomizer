export const initCharacterFilter = () => {
  const searchInput = document.querySelector<HTMLInputElement>(
    '[data-character-search]',
  )
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>('[data-character-card]'),
  )

  if (!searchInput || cards.length === 0) return

  const applyFilter = () => {
    const query = searchInput.value.trim().toLowerCase()
    cards.forEach((card) => {
      const name = card.dataset.characterName ?? ''
      const matches = query.length === 0 || name.includes(query)
      card.style.display = matches ? '' : 'none'
    })
  }

  searchInput.addEventListener('input', applyFilter)
  applyFilter()
}
