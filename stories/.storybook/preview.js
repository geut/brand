
// configure viewport sizes as same as tailwind breakpoints

const tailwindViewport = {
  nb: {
    name: 'mobile',
    styles: {
      width: '380px',
      height: '100%'
    },

  },
  sm: {
    name: 'sm',
    styles: {
      width: '640px',
      height: '100%'
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '100%'
    },
  },
  lg: {
    name: 'lg',
    styles: {
      width: '1024px',
      height: '100%'
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  '2xl': {
    name: '2xl',
    styles: {
      width: '1536px',
      height: '100%'
    },
  }, 
};

export const parameters = {
  layout: 'fullscreen',
  viewport: { viewports: tailwindViewport },

};