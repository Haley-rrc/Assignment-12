// import Storybook types
import type { Meta, StoryObj } from "@storybook/react-webpack5";

// import Dropdown component
import Dropdown from "./Dropdown";

// Storybook setting for Dropdown
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    optionOne: { control: "text" },
    optionTwo: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Default Dropdown story
export const Default: Story = {
  args: {
    optionOne: "Option One",
    optionTwo: "Option Two",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

// Disabled Dropdown story
export const Disabled: Story = {
  args: {
    optionOne: "Disabled One",
    optionTwo: "Disabled Two",
    backgroundColor: "#ffffff",
    disabled: true,
  },
};
