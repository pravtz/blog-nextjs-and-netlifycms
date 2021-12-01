import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  mobile: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  tablet: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
  small: {
    name: 'Small',
    styles: {
      width: '450px',
      height: '930px',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '769px',
      height: '1024px',
    },
  },
  large: {
    name: 'large',
    styles: {
      width: '1170px',
      height: '720px'
    }
  },
  huge: {
    name: 'Huge',
    styles: {
      width: '1440px',
      height: '1024px'
    }
  },
};


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports
  },


}


