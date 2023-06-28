import type { Meta, StoryObj } from "@storybook/react";
import { RoundButton } from "../components/round-button/RoundButton.component";

const meta: Meta<typeof RoundButton> = {
  title: "Buttons/RoundButton",
  component: RoundButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RoundButton>;

export const Default: Story = {
  args: {
    children: "Saiba mais",
  },
};
