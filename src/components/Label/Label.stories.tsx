// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import Label component
import Label from './Label';

// Storybook setting for Label
const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

// Default Label story
export const Default: Story = {
  args: {
    text: 'Default Label',
    backgroundColor: '#28a745',
    disabled: false,
  },
};

// Disabled Label story
export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    backgroundColor: '#28a745',
    disabled: true,
  },
};
