import './style.css'
import { renderCharacterSelectSection } from './sections/charSelect'
import { renderNamesSection } from './sections/namesSection'
import { renderResultsSection } from './sections/resultsSection'
import { initPlayersSection } from './services/players'
import { initWeightsSection } from './services/weights'
import { initDrawSection } from './services/draw'
import { initCharacterFilter } from './services/characters'
import { initAccordionNavigation } from './services/accordion'
import { applyLocaleToDocument, t } from './services/i18n'

applyLocaleToDocument()

const updateMeta = () => {
  if (typeof document === 'undefined') return
  const metaTitle = t('metaTitle')
  const metaDescription = t('metaDescription')

  document.title = metaTitle

  const setMetaContent = (selector: string, content: string) => {
    const meta = document.querySelector<HTMLMetaElement>(selector)
    if (!meta) return
    meta.setAttribute('content', content)
  }

  setMetaContent('meta[name="description"]', metaDescription)
  setMetaContent('meta[property="og:title"]', metaTitle)
  setMetaContent('meta[property="og:description"]', metaDescription)
  setMetaContent('meta[name="twitter:title"]', metaTitle)
  setMetaContent('meta[name="twitter:description"]', metaDescription)
}

updateMeta()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-shell">
    <header class="app-header">
      <div>
        <h1>${t('appTitle')}</h1>
        <p class="subtitle">${t('appSubtitle')}</p>
      </div>
    </header>

    <main class="accordion-stack">
      ${renderCharacterSelectSection()}
      ${renderNamesSection()}
      ${renderResultsSection()}
    </main>

    <footer class="app-footer">
      <p class="footer-byline">${t('footerByline')}</p>
      <p class="footer-email">${t('footerEmail')}</p>
    </footer>
  </div>
`

initPlayersSection()
initWeightsSection()
initDrawSection()
initCharacterFilter()
initAccordionNavigation()
