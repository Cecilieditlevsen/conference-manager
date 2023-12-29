import { setup } from 'twind'

export function setupTwind() {
  return setup({
    preflight: false,
    hash: true,
    theme: {
      extend: {
        screens: {
          xs: '576px',
          sm: '769px',
          md: '992px',
          lg: '1200px',
        },
        colors: {
          black: 'var(--color-black)',
          white: 'var(--color-white)',
          primary: 'var(--color-primary)',
          'primary-text': 'var(--color-primary-text)',
          secondary: 'var(--color-secondary)',
          'secondary-text': 'var(--color-secondary-text)',
          tag: 'var(--color-tag)',
          icon: 'var(--color-icons)',
          orange: 'var(--orange)',
          link: 'var(--color-link)',
          arrow: 'var(--color-arrows)',
          button: 'var(--color-btn-primary)',
          'button-text': 'var(--color-btn-primary-text)',
          'grey-light': 'var(--color-grey-light)',
          'grey-medium': 'var(--color-grey-medium)',
          'grey-dark': 'var(--color-grey-dark)',
          'dark-900': 'var(--darkmode-900)',
          'dark-800': 'var(--darkmode-800)',
          'dark-700': 'var(--darkmode-700)',
          'dark-600': 'var(--darkmode-600)',
          'dark-highlight-1': 'var(--darkmode-hightlight-1-200)',
          'dark-highlight-2': 'var(--darkmode-hightlight-2-200)',
        },
        borderRadius: {
          'search-bar': 'var(--sleeve-search-bar-small-border-radius)',
        },
        fontFamily: {
          primary: 'var(--font-primary)',
          secondary: 'var(--font-secondary)',
        },
        fontSize: {
          'heading-1-lg': 'var(--h1-font-size-lg)',
          'heading-1': 'var(--h1-font-size-sm)',
          'heading-3-lg': 'var(--h3-font-size-lg)',
          'heading-4-lg': 'var(--h4-font-size-lg)',
          'component-body': 'var(--component-body-font-size)',
          sm: 'var(--small-font-size)',
          base: 'var(--base-font-size)',
          component: 'var(--component-font-size)',
          form: 'var(--form-font-size)',
          button: 'var(--btn-font-size)',
        },
        fontWeight: {
          'heading-weight': 'var(--heading-font-weight)',
        },
        spacing: {
          'section-small-md': 'var(--section-margin-bottom-md--small)',
          'section-small': 'var(--section-margin-bottom-sm--small)',
          'section-medium-md': 'var(--section-margin-bottom-md--medium)',
          'section-medium': 'var(--section-margin-bottom-sm--medium)',
          'section-large-md': 'var(--section-margin-bottom-md--large)',
          'section-large': 'var(--section-margin-bottom-sm--large)',
        },
      },
    },
  })
}
