import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

export default {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "Size of the button",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Button>;

export const Default: StoryObj = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Destructive: StoryObj = {
  args: {
    children: "Button",
    variant: "destructive",
    size: "default",
  },
};

export const Outline: StoryObj = {
  args: {
    children: "Button",
    variant: "outline",
    size: "default",
  },
};

export const Secondary: StoryObj = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "default",
  },
};

export const Ghost: StoryObj = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "default",
  },
};

export const Link: StoryObj = {
  args: {
    children: "Button",
    variant: "link",
    size: "default",
  },
};
