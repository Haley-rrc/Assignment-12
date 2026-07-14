// import Storybook types
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import TableFooter component
import TableFooter from './TableFooter';

// Storybook setting for TableFooter
const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

// Default TableFooter story
export const Default: Story = {
  args: {
    text: 'Default Footer',
    backgroundColor: '#f8f9fa',
    disabled: false,
  },
};

// Disabled TableFooter story
export const Disabled: Story = {
  args: {
    text: 'Disabled Footer',
    backgroundColor: '#f8f9fa',
    disabled: true,
  },
};
