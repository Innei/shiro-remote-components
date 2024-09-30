import 'shiro-types/styles'

import type { Preview, StoryFn } from '@storybook/react'
import { domAnimation, LazyMotion } from 'framer-motion'
import React from 'react'
import { injectGlobal } from 'shiro-types/sandbox'

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
