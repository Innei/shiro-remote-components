import type { FC, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

export const RootPortal: FC<
  {
    to?: HTMLElement
  } & PropsWithChildren
> = (props) => {
  return ReactDOM.createPortal(props.children, props.to || document.body)
}
