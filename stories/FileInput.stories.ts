import type { Meta, StoryObj } from "@storybook/react";
import { FileInput } from "../components/file-input/FileInput.component";

const meta: Meta<typeof FileInput> = {
  title: "Inputs/FileInput",
  component: FileInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  // args: {},
};
