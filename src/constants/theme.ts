export const COLORS = {
  // Backgrounds
  BG_PRIMARY: '#0f0f1a',   // primary background
  BG_SECONDARY: '#16162a',   // secondary background
  BG_CARD: '#1e1e35',   // card background
  BG_BANNER_1: '#FFFFFF0A',  // white with opacity (0.04)
  BG_BANNER_2: '#FFFFFF08',  // white with opacity (0.03)
  BG_BANNER_3: '#C9A84C26',
  BG_BANNER_4: '#C9A84C0D',
  // Text
  TEXT: '#e8e0d0',   // primary text
  TEXT_DIM: '#8a8299',   // secondary text / placeholders
  // Gold — accent primary, buttons, active borders
  GOLD: '#c9a84c',
  GOLD_LIGHT: '#f0c96d',
  GOLD_MID: '#a07020',
  GOLD_DARK: '#8b5e10',
  GOLD_GLOW: 'rgba(201,168,76,0.15)',
  // Accent general UI
  ACCENT: '#7c6fcd',
  // Stats
  STRENGTH: '#e05c5c',   // Strength  🗡️
  STRENGTH_LIGHT: '#ff8f8f',
  INTELLIGENCE: '#5c9ce0',   // Intelligence 📚
  INTELLIGENCE_LIGHT: '#8fc0ff',
  ENDURANCE: '#e08c4c',   // Endurance 🏃
  ENDURANCE_LIGHT: '#ffb87a',
  WISDOM: '#4caf7d',   // Wisdom 🎯
  WISDOM_LIGHT: '#7de0aa',
  FAITH: '#c9a84c',   // Faith ✨ (same as GOLD)
  FAITH_LIGHT: '#f0c96d',
  MAGIC: '#a06ce0',   // Magic 🔮
  MAGIC_LIGHT: '#c99cff',
  // Semantics
  SUCCESS: '#4caf7d',
  ERROR: '#e05c5c',
  WARNING: '#e08c4c',
  INFO: '#5c9ce0',
  DEEPNAVY: '#0a0a18',
  DARKNAVY: '#111128',
  MIDNIGHT: '#0f0f1e',
  BORDER_SUBTLE: 'rgba(255,255,255,0.06)',
  BORDER_GOLD: 'rgba(201,168,76,0.2)',
}

export const GRADIENT_BG = {
  colors: [COLORS.DEEPNAVY, COLORS.DARKNAVY, COLORS.MIDNIGHT] as const,
  locations: [0, 0.5, 1] as const,
};
