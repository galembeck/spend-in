import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export default {
  title: "Components/UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Card>;

export const Default: StoryObj = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can put any content.</p>
      </CardContent>
      <CardFooter>
        <button
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
          type="button"
        >
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: StoryObj = {
  render: () => (
    <Card className="w-80 p-6">
      <p>A simple card with just content and padding.</p>
    </Card>
  ),
};

export const WithoutFooter: StoryObj = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Product Card</CardTitle>
        <CardDescription>A beautiful product description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Price: $99.99</p>
          <p>In stock: 15 units</p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithoutHeader: StoryObj = {
  render: () => (
    <Card className="w-80">
      <CardContent className="pt-6">
        <h3 className="mb-2 font-semibold">Quick Note</h3>
        <p>This card doesn&quott have a header section.</p>
      </CardContent>
      <CardFooter>
        <button
          className="text-muted-foreground text-sm hover:text-foreground"
          type="button"
        >
          Learn more
        </button>
      </CardFooter>
    </Card>
  ),
};

export const MultipleActions: StoryObj = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Confirmation</CardTitle>
        <CardDescription>
          Are you sure you want to delete this item?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This action cannot be undone.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <button
          className="rounded-md bg-destructive px-4 py-2 text-destructive-foreground"
          type="button"
        >
          Delete
        </button>
        <button
          className="rounded-md border border-input px-4 py-2"
          type="button"
        >
          Cancel
        </button>
      </CardFooter>
    </Card>
  ),
};

export const LongContent: StoryObj = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Article Preview</CardTitle>
        <CardDescription>Published on July 9, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </CardContent>
      <CardFooter>
        <button className="text-primary text-sm hover:underline" type="button">
          Read more
        </button>
      </CardFooter>
    </Card>
  ),
};
