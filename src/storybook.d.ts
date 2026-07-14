// Tell TypeScript about Storybook Webpack 5 types
declare module '@storybook/react-webpack5' {
  export type Meta<T = unknown> = {
    component?: T;
    [key: string]: unknown;
  };

  export type StoryObj<T = unknown> = Record<string, unknown> & {
    __metaType?: T;
  };
}
