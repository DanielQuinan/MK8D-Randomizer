export const renderResultsSection = () => `
  <details class="accordion" data-accordion="3">
    <summary>
      <span class="step">3</span>
      <div>
        <h2>Resultado do sorteio</h2>
        <p>Visualização do resultado final para cada participante.</p>
      </div>
      <span class="chevron">⌄</span>
    </summary>
    <div class="accordion-body">
      <div class="results-grid" data-results-grid></div>

      <div class="footer-actions">
        <button class="btn secondary" type="button" data-prev-accordion>
          Voltar
        </button>
        <button class="btn primary" type="button" data-run-draw>
          Sortear novamente
        </button>
      </div>
    </div>
  </details>
`
