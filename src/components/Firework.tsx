import { Fireworks } from '@fireworks-js/react'
import React, { useRef } from 'react'
import type { FireworksHandlers } from '@fireworks-js/react'

import { RootPortal } from '@/shared/portal'

import Styles from './Firework.module.css'

export default () => {
  const [show, setShow] = React.useState(false)
  const handleFire = () => {
    setShow((s) => !s)

    if (!show) {
      ref.current?.start()
    } else {
      ref.current?.stop()
    }
  }

  const ref = useRef<FireworksHandlers>(null)

  return (
    <>
      <div className={Styles.root}>
        <button className={Styles.button} onClick={handleFire}>
          Fire!
        </button>
      </div>
      <RootPortal>
        <div
          // className={[
          //   'fixed inset-0 bg-black duration-200',
          //   show
          //     ? 'z-[9998] opacity-100'
          //     : 'pointer-events-none z-[-99] opacity-0',
          // ].join(' ')}
          className={[Styles.firework, show ? Styles.show : Styles.hide].join(
            ' ',
          )}
        />
        <Fireworks
          onClick={() => {
            setShow(false)
            ref.current?.stop()
          }}
          ref={ref}
          autostart={false}
          options={{
            autoresize: true,
          }}
          // className={show ? 'fixed inset-0 z-[9999]' : 'hidden'}
          className={[Styles.overlay, !show ? Styles.hide : ''].join(' ')}
        />
      </RootPortal>
    </>
  )
}
