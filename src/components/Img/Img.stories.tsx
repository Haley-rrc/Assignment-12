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
    src: 'https://via.placeholder.com/300x180',
    alt: 'Default image',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled Img story
export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/300x180',
    alt: 'Disabled image',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
