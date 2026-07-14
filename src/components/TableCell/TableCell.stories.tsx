// import Storybook types
import type { Meta, StoryObj } from "@storybook/react-webpack5";

// import TableCell component
import TableCell from "./TableCell";

// Storybook setting for TableCell
const meta: Meta<typeof TableCell> = {
  title: "Components/TableCell",
  component: TableCell,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof TableCell>;

// Default TableCell story
export const Default: Story = {
  args: {
    text: "Default Cell",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

// Disabled TableCell story
export const Disabled: Story = {
  args: {
    text: "Disabled Cell",
    backgroundColor: "#ffffff",
    disabled: true,
  },
};
