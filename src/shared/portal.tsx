import { createPortal } from 'react-dom'
import type { FC, PropsWithChildren } from 'react'

export const RootPortal: FC<
  {
    to?: HTMLElement
  } & PropsWithChildren
> = (props) => {
  return createPortal(props.children, props.to || document.body)
}
