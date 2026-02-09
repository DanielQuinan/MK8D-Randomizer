import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { renderCharacterSelectSection } from './sections/charSelect'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-shell">
    <header class="app-header">
      <div>
        <h1>Mario Kart 8 Deluxe Randomizer</h1>
      </div>
    </header>

    <main class="accordion-stack">
      ${renderCharacterSelectSection()}
    </main>
  </div>
`
