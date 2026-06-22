// tell TypeScript about Storybook Webpack5 types
declare module '@storybook/react-webpack5' {
  export type Meta<T = any> = any;
  export type StoryObj<T = any> = any;
}