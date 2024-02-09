import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const customViewports = {
  xs: {
    name: 'xs (320px)',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  sx: {
    name: 'sx (375px)',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  sm: {
    name: 'sm (640px)',
    styles: {
      width: '640px',
      height: '1136px',
    },
  },
  md: {
    name: 'md (768px)',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  lg: {
    name: 'lg (1024px)',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  xl: {
    name: 'xl (1280px)',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
}

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    backgrounds: {
      default: 'purple',
      values: [
        {
          name: 'purple', value: '#020024',
        },
        {
          name: 'gray', value: '#787878',
        },
        {
          name: 'white', value: '#e2e2e2',
        },
        {
          name: 'black', value: '#000000',
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
