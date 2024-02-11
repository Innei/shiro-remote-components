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
      <div className="flex w-full justify-center">
        <button
          className="rounded-lg bg-white px-4 py-1 text-sm font-medium text-red-400 ring-1 ring-zinc-200 hover:bg-zinc-50 dark:bg-black dark:text-red-600 dark:ring-zinc-800 dark:hover:bg-neutral-950"
          onClick={handleFire}
        >
          Fire!
        </button>
      </div>
      <RootPortal>
        <div
          className={[
            'fixed inset-0 bg-black duration-200',
            show
              ? 'z-[9998] opacity-100'
              : 'pointer-events-none z-[-99] opacity-0',
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
          className={show ? 'fixed inset-0 z-[9999]' : 'hidden'}
        />
      </RootPortal>
    </>
  )
}
