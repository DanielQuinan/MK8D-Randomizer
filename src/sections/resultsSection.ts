import { t } from '../services/i18n'

export const renderResultsSection = () => `
  <details class="accordion" data-accordion="3">
    <summary>
      <span class="step">3</span>
      <div>
        <h2>${t('section3Title')}</h2>
        <p>${t('section3Description')}</p>
      </div>
      <span class="chevron">⌄</span>
    </summary>
    <div class="accordion-body">
      <div class="results-grid" data-results-grid></div>

      <div class="footer-actions">
        <button class="btn secondary" type="button" data-prev-accordion>
          ${t('back')}
        </button>
        <button class="btn primary" type="button" data-run-draw>
          ${t('drawAgain')}
        </button>
      </div>
    </div>
  </details>
`
