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
