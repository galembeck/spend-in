import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

export default {
  title: "Components/UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Badge>;

export const Default: StoryObj = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Secondary: StoryObj = {
  args: {
    children: "Badge",
    variant: "secondary",
  },
};

export const Destructive: StoryObj = {
  args: {
    children: "Badge",
    variant: "destructive",
  },
};

export const Outline: StoryObj = {
  args: {
    children: "Badge",
    variant: "outline",
  },
};
