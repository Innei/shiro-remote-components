import ReactDOM from 'react-dom'
import type { FC, PropsWithChildren } from 'react'

export const RootPortal: FC<
  {
    to?: HTMLElement
  } & PropsWithChildren
> = (props) => {
  return ReactDOM.createPortal(props.children, props.to || document.body)
}
