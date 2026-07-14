// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import Card component
import Card from './Card';

// Storybook setting for Card
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default Card story
export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is the default card.',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled Card story
export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled.',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
