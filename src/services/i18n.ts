export type Locale = 'pt-BR' | 'en' | 'es'

type TranslationKey =
  | 'appTitle'
  | 'appSubtitle'
  | 'metaTitle'
  | 'metaDescription'
  | 'footerByline'
  | 'footerEmail'
  | 'section1Title'
  | 'section1Description'
  | 'searchLabel'
  | 'searchPlaceholder'
  | 'resetWeights'
  | 'weightLabel'
  | 'back'
  | 'next'
  | 'section2Title'
  | 'section2Description'
  | 'participants'
  | 'addName'
  | 'settings'
  | 'allowRepeat'
  | 'playerNamePlaceholder'
  | 'hasDlc'
  | 'remove'
  | 'section3Title'
  | 'section3Description'
  | 'drawAgain'
  | 'fallbackCharacterName'
  | 'playerFallbackName'
  | 'dlcLabel'
  | 'baseLabel'

const DEFAULT_LOCALE: Locale = 'pt-BR'

const translations: Record<Locale, Record<TranslationKey, string>> = {
  'pt-BR': {
    appTitle: 'Mario Kart 8 Deluxe Randomizer',
    appSubtitle:
      'Aumente ou reduza o peso de cada personagem para controlar a chance de ele ser sorteado: peso 100 = chance padrão, peso 0 = nunca sai. Depois, adicione os jogadores e execute o sorteio.',
    metaTitle: 'MK8D Randomizer',
    metaDescription:
      'Randomize personagens do Mario Kart 8 Deluxe com chances personalizadas, jogadores e DLC.',
    footerByline: 'Desenvolvido por Aureo Engenharia de Sistemas',
    footerEmail: 'aureosys@gmail.com',
    section1Title: 'Selecionar peso de personagens',
    section1Description: 'Defina a chance de cada personagem aparecer no sorteio.',
    searchLabel: 'Pesquisa',
    searchPlaceholder: 'Pesquisar personagem...',
    resetWeights: 'Resetar pesos',
    weightLabel: 'Peso',
    back: 'Voltar',
    next: 'Próximo',
    section2Title: 'Criar nomes para o sorteio',
    section2Description: 'Adicione jogadores, se permite repetir e se possuem DLC.',
    participants: 'Participantes',
    addName: 'Adicionar nome',
    settings: 'Configurações',
    allowRepeat: 'Permitir repetir personagens',
    playerNamePlaceholder: 'Nome do jogador',
    hasDlc: 'Tem DLC',
    remove: 'Remover',
    section3Title: 'Resultado do sorteio',
    section3Description: 'Visualização do resultado final para cada participante.',
    drawAgain: 'Sortear novamente',
    fallbackCharacterName: 'Sem personagem',
    playerFallbackName: 'Jogador {index}',
    dlcLabel: 'DLC',
    baseLabel: 'Base',
  },
  en: {
    appTitle: 'Mario Kart 8 Deluxe Randomizer',
    appSubtitle:
      'Raise or lower each character\'s weight to control draw chances: weight 100 = standard odds, weight 0 = never chosen. Then add players and run the draw.',
    metaTitle: 'MK8D Randomizer',
    metaDescription:
      'Randomize Mario Kart 8 Deluxe characters with custom odds, players, and DLC.',
    footerByline: 'Developed by Aureo Systems Engineering',
    footerEmail: 'aureosys@gmail.com',
    section1Title: 'Set character weights',
    section1Description: 'Define each character\'s chance of being drawn.',
    searchLabel: 'Search',
    searchPlaceholder: 'Search character...',
    resetWeights: 'Reset weights',
    weightLabel: 'Weight',
    back: 'Back',
    next: 'Next',
    section2Title: 'Add players for the draw',
    section2Description: 'Add players, allow repeats, and enable DLC.',
    participants: 'Participants',
    addName: 'Add name',
    settings: 'Settings',
    allowRepeat: 'Allow repeating characters',
    playerNamePlaceholder: 'Player name',
    hasDlc: 'Has DLC',
    remove: 'Remove',
    section3Title: 'Draw results',
    section3Description: 'Final results for each participant.',
    drawAgain: 'Draw again',
    fallbackCharacterName: 'No character',
    playerFallbackName: 'Player {index}',
    dlcLabel: 'DLC',
    baseLabel: 'Base',
  },
  es: {
    appTitle: 'Mario Kart 8 Deluxe Randomizer',
    appSubtitle:
      'Sube o baja el peso de cada personaje para controlar la probabilidad del sorteo: peso 100 = probabilidad estándar, peso 0 = nunca aparece. Luego agrega jugadores y realiza el sorteo.',
    metaTitle: 'MK8D Randomizer',
    metaDescription:
      'Randomiza personajes de Mario Kart 8 Deluxe con probabilidades personalizadas, jugadores y DLC.',
    footerByline: 'Desarrollado por Aureo Ingeniería de Sistemas',
    footerEmail: 'aureosys@gmail.com',
    section1Title: 'Seleccionar peso de personajes',
    section1Description: 'Define la probabilidad de cada personaje en el sorteo.',
    searchLabel: 'Búsqueda',
    searchPlaceholder: 'Buscar personaje...',
    resetWeights: 'Restablecer pesos',
    weightLabel: 'Peso',
    back: 'Volver',
    next: 'Siguiente',
    section2Title: 'Crear nombres para el sorteo',
    section2Description: 'Agrega jugadores, permite repetir y habilita DLC.',
    participants: 'Participantes',
    addName: 'Agregar nombre',
    settings: 'Configuración',
    allowRepeat: 'Permitir repetir personajes',
    playerNamePlaceholder: 'Nombre del jugador',
    hasDlc: 'Tiene DLC',
    remove: 'Quitar',
    section3Title: 'Resultado del sorteo',
    section3Description: 'Resultado final para cada participante.',
    drawAgain: 'Sortear de nuevo',
    fallbackCharacterName: 'Sin personaje',
    playerFallbackName: 'Jugador {index}',
    dlcLabel: 'DLC',
    baseLabel: 'Base',
  },
}

const normalizeLocale = (value: string): Locale | null => {
  const normalized = value.toLowerCase()
  if (normalized.startsWith('pt')) return 'pt-BR'
  if (normalized.startsWith('es')) return 'es'
  if (normalized.startsWith('en')) return 'en'
  return null
}

const detectLocale = (): Locale => {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE
  const candidates = Array.isArray(navigator.languages)
    ? navigator.languages
    : [navigator.language]
  for (const candidate of candidates) {
    const locale = normalizeLocale(candidate)
    if (locale) return locale
  }
  return DEFAULT_LOCALE
}

const currentLocale: Locale = detectLocale()

export const getLocale = () => currentLocale

export const applyLocaleToDocument = () => {
  if (typeof document === 'undefined') return
  document.documentElement.lang = currentLocale
}

export const t = (
  key: TranslationKey,
  variables?: Record<string, string | number>,
) => {
  const template =
    translations[currentLocale]?.[key] ?? translations[DEFAULT_LOCALE][key]
  if (!variables) return template
  return template.replace(/\{(\w+)\}/g, (_, name) =>
    String(variables[name] ?? ''),
  )
}
