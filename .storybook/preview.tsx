import React from 'react'
import { injectGlobal } from 'shiro-types/sandbox'
import type { Preview, StoryFn } from '@storybook/react'

import 'shiro-types/styles'

import { domAnimation, LazyMotion } from 'framer-motion'

injectGlobal()
export const decorators: StoryFn<any>[] = [
  (Story) => (
    <div>
      <LazyMotion features={domAnimation}>
        <Story />
      </LazyMotion>
    </div>
  ),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
