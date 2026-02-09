export const renderNamesSection = () => `
  <details class="accordion" data-accordion="2">
    <summary>
      <span class="step">2</span>
      <div>
        <h2>Criar nomes para o sorteio</h2>
        <p>Adicione jogadores, se permite repetir e se possuem DLC.</p>
      </div>
      <span class="chevron">⌄</span>
    </summary>
    <div class="accordion-body">
      <div class="names-layout">
        <div class="names-panel">
          <div class="panel-header">
            <h3>Participantes</h3>
            <button class="btn ghost" type="button" data-add-player>
              Adicionar nome
            </button>
          </div>
          <div class="names-list" data-players-list></div>
        </div>

        <div class="names-panel">
          <h3>Configurações</h3>
          <label class="checkbox">
            <input type="checkbox" data-allow-repeat />
            <span>Permitir repetir personagens</span>
          </label>
        </div>
      </div>

      <div class="footer-actions">
        <button class="btn secondary" type="button" data-prev-accordion>
          Voltar
        </button>
        <button class="btn primary" type="button" data-next-accordion>
          Próximo
        </button>
      </div>
    </div>
  </details>
`
