import './style.css'
import { renderCharacterSelectSection } from './sections/charSelect'
import { renderNamesSection } from './sections/namesSection'
import { renderResultsSection } from './sections/resultsSection'
import { initWeightsSection } from './services/weights'
import { initCharacterFilter } from './services/characters'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-shell">
    <header class="app-header">
      <div>
        <h1>Mario Kart 8 Deluxe Randomizer</h1>
      </div>
    </header>

    <main class="accordion-stack">
      ${renderCharacterSelectSection()}
      ${renderNamesSection()}
      ${renderResultsSection()}
    </main>
  </div>
`
initWeightsSection()
