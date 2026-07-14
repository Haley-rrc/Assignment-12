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
    imageUrl:
      'https://www.rrc.ca/wp-content/uploads/sites/1/2021/10/RRC-NDC_Exterior-0557-web_banner.jpg',
    backgroundColor: '#333333',
    disabled: false,
  },
};

// Disabled HeroImage story
export const Disabled: Story = {
  args: {
    title: 'Disabled Hero',
    subtitle: 'This hero image is disabled.',
    imageUrl:
      'https://www.rrc.ca/wp-content/uploads/sites/1/2021/10/RRC-NDC_Exterior-0557-web_banner.jpg',
    backgroundColor: '#333333',
    disabled: true,
  },
};
