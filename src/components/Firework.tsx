import '../index.css'

import { Fireworks } from '@fireworks-js/react'
import React, { useRef } from 'react'
import type { FireworksHandlers } from '@fireworks-js/react'

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
      <div className="cn-flex cn-w-full cn-justify-center">
        <button
          className="cn-btn cn-btn-circle cn-btn-accent cn-h-auto !cn-min-h-0 cn-w-auto cn-px-4 cn-py-2"
          onClick={handleFire}
        >
          Fire!
        </button>
      </div>

      <div
        className={[
          'cn-fixed cn-inset-0 cn-bg-black cn-duration-200',
          show ? 'cn-z-[9998] cn-opacity-100' : 'cn-z-[-99] cn-opacity-0',
        ].join(' ')}
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
        className={
          show ? 'cn-fixed cn-inset-0 cn-z-[9999]' : 'cn-pointer-events-none'
        }
      />
    </>
  )
}
