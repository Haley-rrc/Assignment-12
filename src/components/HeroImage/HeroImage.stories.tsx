// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import HeroImage component
import HeroImage from './HeroImage';

// Storybook setting for HeroImage
const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imageUrl: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

// Default HeroImage story
export const Default: Story = {
  args: {
    title: 'Default Hero',
    subtitle: 'This is the default hero image.',
    imageUrl: 'https://via.placeholder.com/900x400',
    backgroundColor: '#333333',
    disabled: false,
  },
};

// Disabled HeroImage story
export const Disabled: Story = {
  args: {
    title: 'Disabled Hero',
    subtitle: 'This hero image is disabled.',
    imageUrl: 'https://via.placeholder.com/900x400',
    backgroundColor: '#333333',
    disabled: true,
  },
};
