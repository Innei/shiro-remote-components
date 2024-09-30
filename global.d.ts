import 'vite/client'

import type { FC } from 'react'

declare global {
  type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string
  }
  type NativeLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
  type SharedProps = {
    variant?: 'primary' | 'secondary'
    className?: string
    isLoading?: boolean
  }
  type ButtonProps = SharedProps & (NativeButtonProps | NativeLinkProps)
  export interface Window {
    ShiroComponents: {
      StyledButton: FC<ButtonProps>
    }
  }

  declare module '*.css' {
    const content: Record<string, string>
    export default content
  }
}

export {}
