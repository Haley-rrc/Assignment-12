// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import TableHeader component
import TableHeader from './TableHeader';

// Storybook setting for TableHeader
const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

// Default TableHeader story
export const Default: Story = {
  args: {
    text: 'Default Header',
    backgroundColor: '#343a40',
    disabled: false,
  },
};

// Disabled TableHeader story
export const Disabled: Story = {
  args: {
    text: 'Disabled Header',
    backgroundColor: '#343a40',
    disabled: true,
  },
};
