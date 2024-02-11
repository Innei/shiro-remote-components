import '../index.css'

import { Fireworks } from '@fireworks-js/react'
import React, { useRef } from 'react'
import type { FireworksHandlers } from '@fireworks-js/react'

import { RootPortal } from '@/shared/portal'

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
          className="cn-rounded-lg cn-bg-white cn-px-4 cn-py-1 cn-text-sm cn-font-medium cn-text-red-400 cn-ring-1 cn-ring-zinc-200 hover:cn-bg-zinc-50 dark:cn-bg-black dark:cn-text-red-600 dark:cn-ring-zinc-800 dark:hover:cn-bg-neutral-950"
          onClick={handleFire}
        >
          Fire!
        </button>
      </div>
      <RootPortal>
        <div
          className={[
            'cn-fixed cn-inset-0 cn-bg-black cn-duration-200',
            show
              ? 'cn-z-[9998] cn-opacity-100'
              : 'cn-pointer-events-none cn-z-[-99] cn-opacity-0',
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
          className={show ? 'cn-fixed cn-inset-0 cn-z-[9999]' : 'cn-hidden'}
        />
      </RootPortal>
    </>
  )
}
