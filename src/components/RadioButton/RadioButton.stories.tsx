// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import RadioButton component
import RadioButton from './RadioButton';

// Storybook setting for RadioButton
const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

// Default RadioButton story
export const Default: Story = {
  args: {
    label: 'Default Radio',
    backgroundColor: '#ffffff',
    disabled: false,
    checked: false,
  },
};

// Disabled RadioButton story
export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    backgroundColor: '#ffffff',
    disabled: true,
    checked: false,
  },
};
