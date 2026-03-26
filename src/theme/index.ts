// theme/index.ts
// Russell Kaplan Auctioneers — Chakra UI Theme
// Built around primary brand gold: #F9B000
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// ─── Define theme configuration ──────────────────────
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary brand — Amber Gold
        brand: {
          50: { value: '#FFFBEE' },
          100: { value: '#FEF6DC' },
          200: { value: '#FDE9A3' },
          300: { value: '#FCD86A' },
          400: { value: '#F9B000' },  // ← brand primary (CTAs, accents)
          500: { value: '#E09D00' },
          600: { value: '#C98E00' },  // ← hover states, text on light bg
          700: { value: '#A67200' },
          800: { value: '#7A5400' },
          900: { value: '#4E3600' },
        },

        // Neutral — Cream to Ink
        neutral: {
          50: { value: '#FFFFFF' },   // white — navbar, cards, inputs
          100: { value: '#FAFAF8' },  // cream — page background
          200: { value: '#F2EDE4' },  // cream-mid — section alternation, services panel
          300: { value: '#E5DDD0' },
          400: { value: '#C8BFAF' },
          500: { value: '#A09488' },
          600: { value: '#6E7178' },  // stone — secondary text, nav links, captions
          700: { value: '#545459' },
          800: { value: '#3A3A3C' },
          900: { value: '#1A1A1A' },  // ink — primary text
        },

        // Ink — Charcoal scale
        ink: {
          50: { value: '#F5F5F5' },
          100: { value: '#E8E8E8' },
          200: { value: '#D0D0D0' },
          300: { value: '#ABABAB' },
          400: { value: '#888888' },
          500: { value: '#666666' },
          600: { value: '#444444' },
          700: { value: '#2C2C2C' },  // charcoal-2 — button hover
          800: { value: '#222222' },  // charcoal — dark sections (stats, showroom)
          900: { value: '#161616' },  // footer background
        },
      },

      fonts: {
        heading: { value: `'Cormorant Garamond', Georgia, serif` },
        body: { value: `'DM Sans', system-ui, sans-serif` },
        mono: { value: `'JetBrains Mono', 'Fira Code', monospace` },
      },

      fontSizes: {
        '2xs': { value: '0.625rem' },  // 10px
        xs: { value: '0.6875rem' },    // 11px
        sm: { value: '0.8125rem' },    // 13px
        md: { value: '0.9375rem' },    // 15px — body default
        lg: { value: '1.0625rem' },    // 17px
        xl: { value: '1.25rem' },      // 20px
        '2xl': { value: '1.5rem' },    // 24px
        '3xl': { value: '1.875rem' },  // 30px
        '4xl': { value: '2.25rem' },   // 36px
        '5xl': { value: '3rem' },      // 48px
        '6xl': { value: '4rem' },      // 64px
        '7xl': { value: '5rem' },      // 80px — hero headline max
      },

      fontWeights: {
        light: { value: 300 },
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 500 }, // intentionally same — only 300/400/500 are used
        bold: { value: 500 },
      },

      letterSpacings: {
        tighter: { value: '-0.01em' },
        tight: { value: '0' },
        normal: { value: '0.04em' },
        wide: { value: '0.12em' },
        wider: { value: '0.18em' },
        widest: { value: '0.24em' },
      },

      radii: {
        none: { value: '0' },
        sm: { value: '3px' },
        md: { value: '6px' },    // ← default for buttons, inputs, cards
        lg: { value: '8px' },
        xl: { value: '12px' },
        full: { value: '9999px' },
      },
    },

    semanticTokens: {
      colors: {
        // Backgrounds
        'bg.page': { value: { base: '{colors.neutral.100}', _dark: '{colors.ink.900}' } },
        'bg.surface': { value: { base: '{colors.neutral.50}', _dark: '{colors.ink.800}' } },
        'bg.raised': { value: { base: '{colors.neutral.200}', _dark: '{colors.ink.700}' } },
        'bg.dark': { value: { base: '{colors.ink.800}', _dark: '{colors.ink.800}' } },
        'bg.footer': { value: { base: '{colors.ink.900}', _dark: '{colors.ink.900}' } },

        // Text
        'text.primary': { value: { base: '{colors.neutral.900}', _dark: '{colors.neutral.50}' } },
        'text.secondary': { value: { base: '{colors.neutral.600}', _dark: '{colors.neutral.400}' } },
        'text.brand': { value: { base: '{colors.brand.600}', _dark: '{colors.brand.400}' } },
        'text.on-dark': { value: { base: '{colors.neutral.50}', _dark: '{colors.neutral.50}' } },
        'text.on-brand': { value: { base: '{colors.neutral.900}', _dark: '{colors.neutral.900}' } },

        // Brand
        'brand.primary': { value: { base: '{colors.brand.400}', _dark: '{colors.brand.400}' } },
        'brand.hover': { value: { base: '{colors.brand.600}', _dark: '{colors.brand.600}' } },
        'brand.subtle': { value: { base: '{colors.brand.100}', _dark: '{colors.brand.800}' } },
        'brand.xsubtle': { value: { base: '{colors.brand.50}', _dark: '{colors.brand.900}' } },

        // Borders
        'border.default': { value: { base: '{colors.neutral.200}', _dark: '{colors.ink.600}' } },
        'border.subtle': { value: { base: '{colors.neutral.100}', _dark: '{colors.ink.700}' } },
        'border.brand': { value: { base: '{colors.brand.300}', _dark: '{colors.brand.700}' } },
        'border.dark': { value: { base: '{colors.ink.600}', _dark: '{colors.ink.400}' } },
      },
    },
  },

  globalCss: {
    'html, body': {
      bg: 'bg.page',
      color: 'text.primary',
    },
    'a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
});

// ─── Create and export the system ────────────────────
const system = createSystem(defaultConfig, config);

export default system;
