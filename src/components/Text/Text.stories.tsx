// import Storybook types
import type { Meta, StoryObj } from "@storybook/react-webpack5";

// import Text component
import Text from "./Text";

// Storybook setting for Text
const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

// Default Text story
export const Default: Story = {
  args: {
    text: "This is normal text.",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

// Disabled Text story
export const Disabled: Story = {
  args: {
    text: "This text is disabled.",
    backgroundColor: "#ffffff",
    disabled: true,
  },
};
