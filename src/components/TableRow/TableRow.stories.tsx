// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import TableRow component
import TableRow from './TableRow';

// Storybook setting for TableRow
const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableRow>;

// Default TableRow story
export const Default: Story = {
  args: {
    text: 'Default Row',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled TableRow story
export const Disabled: Story = {
  args: {
    text: 'Disabled Row',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
