const results = [
  {
    name: 'Jogador 1',
    character: 'Mario',
    image: '/assets/MK8_Mario_Icon.png',
    dlc: false,
  },
  {
    name: 'Jogador 2',
    character: 'Peach',
    image: '/assets/MK8_Peach_Icon.png',
    dlc: false,
  },
  {
    name: 'Jogador 3',
    character: 'Kamek',
    image: '/assets/MK8DX_Kamek_Icon.png',
    dlc: true,
  },
]

const resultCards = results
  .map(
    (result) => `
      <article class="result-card">
        <img src="${result.image}" alt="${result.character}" />
        <div>
          <h3>${result.name}</h3>
          <p>${result.character}</p>
          <span class="pill ${result.dlc ? 'pill-dlc' : 'pill-base'}">
            ${result.dlc ? 'DLC' : 'Base'}
          </span>
        </div>
      </article>
    `,
  )
  .join('')

export const renderResultsSection = () => `
  <details class="accordion">
    <summary>
      <span class="step">3</span>
      <div>
        <h2>Resultado do sorteio</h2>
        <p>Visualização do resultado final para cada participante.</p>
      </div>
      <span class="chevron">⌄</span>
    </summary>
    <div class="accordion-body">
      <div class="results-grid">
        ${resultCards}
      </div>

      <div class="footer-actions">
        <button class="btn secondary" type="button">Voltar</button>
        <button class="btn primary" type="button">Sortear novamente</button>
      </div>
    </div>
  </details>
`
