// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import Img component
import Img from './Img';

// Storybook setting for Img
const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

// Default Img story
export const Default: Story = {
  args: {
    src: 'https://www.winnipegfreepress.com/wp-content/uploads/sites/2/2022/05/NEP11058272.jpg/50x50',
    alt: 'Default image',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled Img story
export const Disabled: Story = {
  args: {
    src: 'https://www.winnipegfreepress.com/wp-content/uploads/sites/2/2022/05/NEP11058272.jpg/50x50',
    alt: 'Disabled image',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
