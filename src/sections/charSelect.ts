const characters = [
  { name: 'Baby Daisy', image: '/assets/MK8_BabyDaisy_Icon.png', dlc: false },
  { name: 'Baby Luigi', image: '/assets/MK8_BabyLuigi_Icon.png', dlc: false },
  { name: 'Baby Mario', image: '/assets/MK8_BabyMario_Icon.png', dlc: false },
  { name: 'Baby Peach', image: '/assets/MK8_BabyPeach_Icon.png', dlc: false },
  { name: 'Baby Rosalina', image: '/assets/MK8_BabyRosalina_Icon.png', dlc: false },
  { name: 'Birdo', image: '/assets/MK8D_Birdo_Icon.png', dlc: true },
  { name: 'Bowser', image: '/assets/MK8_Bowser_Icon.png', dlc: false },
  { name: 'Bowser Jr.', image: '/assets/MK8_Bowser_Jr_Icon.png', dlc: false },
  { name: 'Cat Peach', image: '/assets/MK8_Cat_Peach_Icon.png', dlc: false },
  { name: 'Daisy', image: '/assets/MK8_Daisy_Icon.png', dlc: false },
  { name: 'Donkey Kong', image: '/assets/MK8_DKong_Icon.png', dlc: false },
  { name: 'Dry Bones', image: '/assets/MK8DX_Dry_Bones_Icon.png', dlc: false },
  { name: 'Dry Bowser', image: '/assets/MK8_Dry_Bowser_Icon.png', dlc: false },
  { name: 'Funky Kong', image: '/assets/MK8DX_Funky_Kong_Icon.png', dlc: true },
  { name: 'Female Inkling', image: '/assets/MK8DX_Female_Inkling_Icon.png', dlc: false },
  { name: 'Iggy', image: '/assets/MK8_Iggy_Icon.png', dlc: false },
  { name: 'Isabelle', image: '/assets/MK8_Isabelle_Icon.png', dlc: false },
  { name: 'Kamek', image: '/assets/MK8DX_Kamek_Icon.png', dlc: true },
  { name: 'King Boo', image: '/assets/MK8DX_King_Boo_Icon.png', dlc: false },
  { name: 'Koopa Troopa', image: '/assets/MK8_Koopa_Icon.png', dlc: false },
  { name: 'Lakitu', image: '/assets/MK8_Lakitu_Icon.png', dlc: false },
  { name: 'Larry', image: '/assets/MK8_Larry_Icon.png', dlc: false },
  { name: 'Lemmy', image: '/assets/MK8_Lemmy_Icon.png', dlc: false },
  { name: 'Link (BotW)', image: '/assets/MK8D_BotW_Link_Icon.png', dlc: false },
  { name: 'Ludwig', image: '/assets/MK8_Ludwig_Icon.png', dlc: false },
  { name: 'Luigi', image: '/assets/MK8_Luigi_Icon.png', dlc: false },
  { name: 'Mario', image: '/assets/MK8_Mario_Icon.png', dlc: false },
  { name: 'Metal Mario', image: '/assets/MK8_MMario_Icon.png', dlc: false },
  { name: 'Mii', image: '/assets/Mii_MK8.png', dlc: false },
  { name: 'Morton', image: '/assets/MK8_Morton_Icon.png', dlc: false },
  { name: 'Pauline', image: '/assets/MK8DX_Pauline_Icon.png', dlc: true },
  { name: 'Peach', image: '/assets/MK8_Peach_Icon.png', dlc: false },
  { name: 'Peachette', image: '/assets/MK8DX_Peachette_Icon.png', dlc: true },
  { name: 'Pink Gold Peach', image: '/assets/MK8_PGPeach_Icon.png', dlc: false },
  { name: 'Petey Piranha', image: '/assets/MK8DX_Petey_Piranha_Icon.png', dlc: true },
  { name: 'Rosalina', image: '/assets/MK8_Rosalina_Icon.png', dlc: false },
  { name: 'Roy', image: '/assets/MK8_Roy_Icon.png', dlc: false },
  { name: 'Shy Guy', image: '/assets/MK8_ShyGuy_Icon.png', dlc: false },
  { name: 'Tanooki Mario', image: '/assets/MK8_Tanooki_Mario_Icon.png', dlc: false },
  { name: 'Toad', image: '/assets/MK8_Toad_Icon.png', dlc: false },
  { name: 'Toadette', image: '/assets/MK8_Toadette_Icon.png', dlc: false },
  { name: 'Villager (Male)', image: '/assets/VillagerMale-Icon-MK8.png', dlc: false },
  { name: 'Waluigi', image: '/assets/MK8_Waluigi_Icon.png', dlc: false },
  { name: 'Wario', image: '/assets/MK8_Wario_Icon.png', dlc: false },
  { name: 'Wendy', image: '/assets/MK8_Wendy_Icon.png', dlc: false },
  { name: 'Wiggler', image: '/assets/MK8DX_Wiggler_Icon.png', dlc: true },
  { name: 'Yoshi', image: '/assets/MK8_Yoshi_Icon.png', dlc: false },
  { name: 'Diddy Kong', image: '/assets/MK8DX_Diddy_Kong_Icon.png', dlc: true },
]

const characterCards = characters
  .map(
    (character) => `
      <article class="character-card">
        <img src="${character.image}" alt="${character.name}" />
        <div class="character-title">
          <h3>${character.name}</h3>
          ${character.dlc ? '<span class="pill pill-dlc">DLC</span>' : ''}
        </div>
        <label class="weight-control">
          <span>Peso</span>
          <input type="number" min="0" max="100" value="100" />
        </label>
      </article>
    `,
  )
  .join('')

export const renderCharacterSelectSection = () => `
  <details class="accordion" open>
    <summary>
      <span class="step">1</span>
      <div>
        <h2>Selecionar peso de personagens</h2>
        <p>Defina a chance de cada personagem aparecer no sorteio.</p>
      </div>
      <span class="chevron">⌄</span>
    </summary>
    <div class="accordion-body">
      <div class="toolbar">
        <div class="input-group">
          <label>Pesquisa</label>
          <input type="text" placeholder="Pesquisar personagem..." />
        </div>
        <button class="btn ghost" type="button">Resetar pesos</button>
      </div>

      <div class="character-grid">
        ${characterCards}
      </div>

      <div class="footer-actions">
        <button class="btn secondary" type="button">Voltar</button>
        <button class="btn primary" type="button">Próximo</button>
      </div>
    </div>
  </details>
`
