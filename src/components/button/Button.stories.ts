import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '.'
import { ButtonSize, ButtonStyleType } from './button.types'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  argTypes: {
    typeStyle: {
      description: 'Whether the button is primary',
      options: ButtonStyleType
    },
    size: {
      description: 'The size of the button',
      options: ButtonSize
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    typeStyle: ButtonStyleType.PRIMARY,
    children: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    typeStyle: ButtonStyleType.SECONDARY,
    children: 'Secondary Button'
  }
}

export const Large: Story = {
  args: {
    size: ButtonSize.LARGE,
    children: 'Large Button'
  }
}

export const Small: Story = {
  args: {
    size: ButtonSize.SMALL,
    children: 'Small Button'
  }
}

export const Link: Story = {
  args: {
    typeStyle: ButtonStyleType.LINK,
    children: 'Link Button'
  }
}
