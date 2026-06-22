// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import Table component
import Table from './Table';

// Storybook setting for Table
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    caption: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

// Default Table story
export const Default: Story = {
  args: {
    caption: 'Default Table',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled Table story
export const Disabled: Story = {
  args: {
    caption: 'Disabled Table',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
