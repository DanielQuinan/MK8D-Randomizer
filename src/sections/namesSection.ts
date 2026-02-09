const nameRows = Array.from({ length: 4 }, (_, index) => `
  <div class="name-row">
    <input type="text" placeholder="Nome do jogador ${index + 1}" />
    <label class="checkbox">
      <input type="checkbox" />
      <span>Tem DLC</span>
    </label>
  </div>
`).join('')

export const renderNamesSection = () => `
  <details class="accordion">
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
            <button class="btn ghost" type="button">Adicionar nome</button>
          </div>
          ${nameRows}
        </div>

        <div class="names-panel">
          <h3>Configurações</h3>
          <label class="checkbox">
            <input type="checkbox" />
            <span>Permitir repetir personagens</span>
          </label>
        </div>
      </div>

      <div class="footer-actions">
        <button class="btn secondary" type="button">Voltar</button>
        <button class="btn primary" type="button">Próximo</button>
      </div>
    </div>
  </details>
`
