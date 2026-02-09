const getAccordions = () =>
  Array.from(
    document.querySelectorAll<HTMLDetailsElement>('[data-accordion]'),
  ).sort((a, b) => {
    const aIndex = Number(a.dataset.accordion)
    const bIndex = Number(b.dataset.accordion)
    return aIndex - bIndex
  })

const openAccordion = (accordion?: HTMLDetailsElement) => {
  if (!accordion) return
  accordion.open = true
  accordion.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const initAccordionNavigation = () => {
  const accordions = getAccordions()
  if (accordions.length === 0) return

  accordions.forEach((accordion, index) => {
    const nextButton = accordion.querySelector<HTMLButtonElement>(
      '[data-next-accordion]',
    )
    const prevButton = accordion.querySelector<HTMLButtonElement>(
      '[data-prev-accordion]',
    )

    nextButton?.addEventListener('click', () => {
      accordion.open = false
      openAccordion(accordions[index + 1])
    })

    prevButton?.addEventListener('click', () => {
      accordion.open = false
      openAccordion(accordions[index - 1])
    })
  })
}
