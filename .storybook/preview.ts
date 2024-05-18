import type { Preview } from '@storybook/react';
import '../src/static/styles/global.css';
import '../src/static/styles/colors.css';
import '../src/static/styles/reset.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
