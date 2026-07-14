// Storybook needed
import type { Meta, StoryObj } from "@storybook/react-webpack5";

// import Button
import Button from "./Button";

const meta: Meta<typeof Button> = {
  // Storybook menu shows
  title: "Components/Button",

  // what to display(button)
  component: Button,

  argTypes: {
    label: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// defult
export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "#007bff",
    disabled: false,
  },
};

// disable
export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    backgroundColor: "#007bff",
    disabled: true,
  },
};
