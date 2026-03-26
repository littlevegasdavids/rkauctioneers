// theme/index.ts
// Russell Kaplan Auctioneers — Chakra UI Theme
// Built around primary brand gold: #F9B000

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// ─── Colour mode ─────────────────────────────────────
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// ─── Colour palettes ─────────────────────────────────
const colors = {
  // Primary brand — Amber Gold
  brand: {
    50:  '#FFFBEE',
    100: '#FEF6DC',
    200: '#FDE9A3',
    300: '#FCD86A',
    400: '#F9B000',  // ← brand primary (CTAs, accents)
    500: '#E09D00',
    600: '#C98E00',  // ← hover states, text on light bg
    700: '#A67200',
    800: '#7A5400',
    900: '#4E3600',
  },

  // Neutral — Cream to Ink
  neutral: {
    50:  '#FFFFFF',  // white — navbar, cards, inputs
    100: '#FAFAF8',  // cream — page background
    200: '#F2EDE4',  // cream-mid — section alternation, services panel
    300: '#E5DDD0',
    400: '#C8BFAF',
    500: '#A09488',
    600: '#6E7178',  // stone — secondary text, nav links, captions
    700: '#545459',
    800: '#3A3A3C',
    900: '#1A1A1A',  // ink — primary text
  },

  // Ink — Charcoal scale
  ink: {
    50:  '#F5F5F5',
    100: '#E8E8E8',
    200: '#D0D0D0',
    300: '#ABABAB',
    400: '#888888',
    500: '#666666',
    600: '#444444',
    700: '#2C2C2C',  // charcoal-2 — button hover
    800: '#222222',  // charcoal — dark sections (stats, showroom)
    900: '#161616',  // footer background
  },
}

// ─── Semantic tokens ──────────────────────────────────
// These map palette stops to meaningful roles in your UI.
// Reference these in component styles instead of raw hex values.
const semanticTokens = {
  colors: {
    // Backgrounds
    'bg.page':        { default: 'neutral.100', _dark: 'ink.900' },
    'bg.surface':     { default: 'neutral.50',  _dark: 'ink.800' },
    'bg.raised':      { default: 'neutral.200', _dark: 'ink.700' },
    'bg.dark':        { default: 'ink.800',     _dark: 'ink.800' },
    'bg.footer':      { default: 'ink.900',     _dark: 'ink.900' },

    // Text
    'text.primary':   { default: 'neutral.900', _dark: 'neutral.50' },
    'text.secondary': { default: 'neutral.600', _dark: 'neutral.400' },
    'text.brand':     { default: 'brand.600',   _dark: 'brand.400' },
    'text.on-dark':   { default: 'neutral.50',  _dark: 'neutral.50' },
    'text.on-brand':  { default: 'neutral.900', _dark: 'neutral.900' },

    // Brand
    'brand.primary':  { default: 'brand.400',   _dark: 'brand.400' },
    'brand.hover':    { default: 'brand.600',   _dark: 'brand.600' },
    'brand.subtle':   { default: 'brand.100',   _dark: 'brand.800' },
    'brand.xsubtle':  { default: 'brand.50',    _dark: 'brand.900' },

    // Borders
    'border.default': { default: 'neutral.200', _dark: 'ink.600' },
    'border.subtle':  { default: 'neutral.100', _dark: 'ink.700' },
    'border.brand':   { default: 'brand.300',   _dark: 'brand.700' },
    'border.dark':    { default: 'ink.600',     _dark: 'ink.400' },
  },
}

// ─── Typography ───────────────────────────────────────
const fonts = {
  heading: `'Cormorant Garamond', Georgia, serif`,
  body:    `'DM Sans', system-ui, sans-serif`,
  mono:    `'JetBrains Mono', 'Fira Code', monospace`,
}

const fontSizes = {
  '2xs': '0.625rem',  // 10px
  xs:    '0.6875rem', // 11px
  sm:    '0.8125rem', // 13px
  md:    '0.9375rem', // 15px — body default
  lg:    '1.0625rem', // 17px
  xl:    '1.25rem',   // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '4rem',      // 64px
  '7xl': '5rem',      // 80px — hero headline max
}

const fontWeights = {
  light:   300,
  normal:  400,
  medium:  500,
  semibold: 500, // intentionally same — only 300/400/500 are used
  bold:    500,
}

const letterSpacings = {
  tighter: '-0.01em',
  tight:   '0',
  normal:  '0.04em',
  wide:    '0.12em',
  wider:   '0.18em',
  widest:  '0.24em',
}

// ─── Global styles ─────────────────────────────────── 
const styles = {
  global: {
    'html, body': {
      bg:    'bg.page',
      color: 'text.primary',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    'a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}

// ─── Border radius ────────────────────────────────────
const radii = {
  none: '0',
  sm:   '3px',
  md:   '6px',    // ← default for buttons, inputs, cards
  lg:   '8px',
  xl:   '12px',
  full: '9999px',
}

// ─── Component overrides ──────────────────────────────
const components = {

  Button: {
    baseStyle: {
      fontFamily: 'body',
      fontWeight: 'medium',
      letterSpacing: 'wide',
      textTransform: 'uppercase',
      borderRadius: 'md',
      _focus: { boxShadow: '0 0 0 3px rgba(249,176,0,0.28)' },
    },
    variants: {
      // Primary dark — "Get a Valuation", "Send Message"
      solid: {
        bg:    'ink.900',
        color: 'white',
        _hover: { bg: 'ink.700', transform: 'translateY(-1px)' },
        _active: { bg: 'ink.800', transform: 'none' },
      },
      // Gold CTA — "Register to Bid"
      brand: {
        bg:    'brand.400',
        color: 'neutral.900',
        _hover: { bg: 'brand.600', transform: 'translateY(-1px)' },
        _active: { bg: 'brand.600', transform: 'none' },
      },
      // Underline text link — "View Upcoming Sessions"
      ghost: {
        bg:         'transparent',
        color:      'text.secondary',
        borderBottom: '1px solid',
        borderColor: 'neutral.400',
        borderRadius: 'none',
        px: 0,
        _hover: { bg: 'transparent', color: 'text.primary', borderColor: 'neutral.900' },
      },
      // Light gold background — used in modals, confirmations
      subtle: {
        bg:    'brand.100',
        color: 'brand.700',
        _hover: { bg: 'brand.200' },
      },
    },
    sizes: {
      sm: { h: '36px', px: '18px', fontSize: 'xs' },
      md: { h: '42px', px: '28px', fontSize: 'xs' },
      lg: { h: '48px', px: '36px', fontSize: 'sm' },
    },
    defaultProps: { variant: 'solid', size: 'md' },
  },

  Input: {
    variants: {
      outline: {
        field: {
          bg:           'bg.surface',
          borderColor:  'border.default',
          borderRadius: 'md',
          color:        'text.primary',
          fontSize:     'sm',
          _placeholder: { color: 'text.secondary' },
          _hover:  { borderColor: 'brand.300' },
          _focus:  {
            borderColor: 'brand.400',
            boxShadow:   '0 0 0 3px rgba(249,176,0,0.12)',
          },
        },
      },
    },
    defaultProps: { variant: 'outline' },
  },

  Textarea: {
    variants: {
      outline: {
        bg:           'bg.surface',
        borderColor:  'border.default',
        borderRadius: 'md',
        color:        'text.primary',
        fontSize:     'sm',
        _placeholder: { color: 'text.secondary' },
        _hover:  { borderColor: 'brand.300' },
        _focus:  {
          borderColor: 'brand.400',
          boxShadow:   '0 0 0 3px rgba(249,176,0,0.12)',
        },
      },
    },
    defaultProps: { variant: 'outline' },
  },

  Select: {
    variants: {
      outline: {
        field: {
          bg:           'bg.surface',
          borderColor:  'border.default',
          borderRadius: 'md',
          color:        'text.primary',
          fontSize:     'sm',
          _focus:  {
            borderColor: 'brand.400',
            boxShadow:   '0 0 0 3px rgba(249,176,0,0.12)',
          },
        },
      },
    },
    defaultProps: { variant: 'outline' },
  },

  Heading: {
    baseStyle: {
      fontFamily: 'heading',
      fontWeight: 'light',
      lineHeight:  1.1,
      color:       'text.primary',
    },
    sizes: {
      // Display / Hero
      '4xl': { fontSize: ['5xl', '6xl', '7xl'] },
      // Section headings
      '3xl': { fontSize: ['3xl', '4xl', '5xl'] },
      '2xl': { fontSize: ['2xl', '3xl', '4xl'] },
      xl:    { fontSize: ['xl', '2xl', '3xl'] },
      // Service panel headings
      lg:    { fontSize: ['xl', '2xl'] },
      md:    { fontSize: ['lg', 'xl'] },
    },
  },

  Text: {
    baseStyle: {
      fontFamily: 'body',
      fontWeight: 'normal',
      lineHeight:  1.75,
      color:       'text.primary',
    },
    variants: {
      muted:  { color: 'text.secondary' },
      label:  { fontSize: 'xs', letterSpacing: 'wider', textTransform: 'uppercase', color: 'text.secondary', fontWeight: 'medium' },
      eyebrow:{ fontSize: 'xs', letterSpacing: 'widest', textTransform: 'uppercase', color: 'text.secondary' },
      price:  { fontFamily: 'heading', fontSize: '2xl', fontWeight: 'normal', color: 'text.primary' },
    },
  },

  Badge: {
    baseStyle: { borderRadius: 'sm', fontFamily: 'body', fontWeight: 'medium', letterSpacing: 'wide' },
    variants: {
      sold: {
        bg:    'brand.400',
        color: 'neutral.900',
        textTransform: 'uppercase',
        fontSize: 'xs',
        px: '10px', py: '4px',
      },
      session: {
        bg:    'brand.100',
        color: 'brand.700',
        textTransform: 'uppercase',
        fontSize: '2xs',
        borderRadius: 'md',
      },
      active: {
        bg:    '#E8F5EC',
        color: '#2E7D47',
        textTransform: 'uppercase',
        fontSize: '2xs',
        borderRadius: 'md',
      },
    },
  },

  Card: {
    baseStyle: {
      container: {
        bg:           'bg.surface',
        borderRadius: 'md',
        border:       '1px solid',
        borderColor:  'border.default',
        overflow:     'hidden',
      },
      body: { p: 5 },
    },
  },

  Divider: {
    baseStyle: {
      borderColor: 'border.default',
      opacity: 1,
    },
  },

  Link: {
    baseStyle: {
      color:          'inherit',
      textDecoration: 'none',
      _hover: { textDecoration: 'none', color: 'text.primary' },
    },
  },
}

// ─── Spacing ──────────────────────────────────────────
// Chakra default (4px base) is fine — no overrides needed.
// Key values for reference:
//   4  = 16px   (inner padding sm)
//   5  = 20px   (inner padding md)
//   6  = 24px   (inner padding lg)
//   10 = 40px   (section padding sm)
//   16 = 64px   (hero padding)
//   20 = 80px   (section padding desktop)
//   24 = 96px   (section padding xl)

// ─── Assemble ─────────────────────────────────────────
const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  radii,
  styles,
  components,
})

export default theme
