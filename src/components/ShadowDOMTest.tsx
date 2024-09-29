import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getGlobalComponent, useModalStack } from 'shiro-types'

import { Styles } from '../Styles'

const Button = getGlobalComponent('Button')
const ShadowDOMTest1 = () => {
  const { present } = useModalStack()
  const pRef = useRef<HTMLDivElement>(null)
  const [el, setEl] = useState<React.ReactNode | null>(null)
  return (
    <div className="h-[300px] bg-cyan-300">
      <Styles />
      {createPortal(
        <Button
          onClick={() => {
            setEl(createPortal(<div>Pro</div>, pRef.current!))

            present({
              content: () => <div>11111111111</div>,
              title: 'Test',
            })
          }}
        >
          CLick
        </Button>,
        document.body,
      )}
      <div className="ppppppppppppppp bg-cyan-50" ref={pRef} />
      {el}
    </div>
  )
}

export default ShadowDOMTest1
