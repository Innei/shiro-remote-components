import React, { useLayoutEffect } from 'react'
import { animateValue } from 'framer-motion'
import type { Spring } from 'framer-motion'

import '../index.css'

const microDampingPreset: Spring = {
  type: 'spring',
  stiffness: 1000,
  damping: 250,
}

// TODO scroller lock
const springScrollTo = (
  y: number,
  scrollerElement: HTMLElement = document.documentElement,
) => {
  const scrollTop = scrollerElement?.scrollTop

  const stopSpringScrollHandler = () => {
    animation.stop()
  }
  const el = scrollerElement || window
  const animation = animateValue({
    keyframes: [scrollTop + 1, y],
    autoplay: true,
    ...microDampingPreset,
    onPlay() {
      el.addEventListener('wheel', stopSpringScrollHandler)
      el.addEventListener('touchmove', stopSpringScrollHandler)
    },

    onUpdate(latest) {
      if (latest <= 0) {
        animation.stop()
      }

      el.scrollTo(0, latest)
    },
  })

  animation.then(() => {
    el.removeEventListener('wheel', stopSpringScrollHandler)
    el.removeEventListener('touchmove', stopSpringScrollHandler)
  })

  return animation
}

const SpringScollContainerDemo = () => {
  const ref1 = React.useRef<HTMLDivElement>(null)
  const ref2 = React.useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    ref1.current?.scrollTo({
      top: 10000,
    })
    ref2.current?.scrollTo({
      top: 10000,
    })

    console.clear()
    console.log('能看到这个，你离成功就不远了呢。Follow')

    const $c = c.current
    if (!$c) return
    // 14r3lahX0x
    const $comment = document.createComment('Caesar=6: 14x3rgnD0d')
    $c.prepend($comment)

    const $comment2 = document.createComment(
      // 2oabCZPVDN
      'U2FsdGVkX1+QLiAcxuTHI6Ruy3I+fGwHlSWYxtQN23g=',
    )
    document.head.prepend($comment2)
  }, [])

  const c = React.useRef<HTMLDivElement>(null)
  return (
    <div
      style={{
        height: '100%',
        overflow: 'hidden',
      }}
      className="relative box-border flex w-full flex-row gap-4 overflow-auto px-4 font-sans"
    >
      <button
        className="absolute top-1 z-[10] cursor-pointer appearance-none rounded-full border-transparent bg-blue-500 px-2 py-1 text-white"
        onClick={() => {
          c.current?.querySelectorAll('button').forEach((e) => e.click())
        }}
      >
        Scroll
      </button>
      <button
        className="absolute left-24 top-1 z-[10] cursor-pointer appearance-none rounded-full border-transparent bg-blue-500 px-2 py-1 text-white"
        onClick={() => {
          if (!ref1.current) return

          ref1.current.scrollTop = 10000

          if (!ref2.current) return

          ref2.current.scrollTop = 10000
        }}
        onDoubleClick={() => {
          const answer = prompt('Answer:')
          if (answer === 'Follow') {
            alert('Correct!............... Y25Oek13PT0=')
          } else {
            alert('Wrong!')
          }
        }}
      >
        Reset
      </button>
      <div
        ref={c}
        style={{
          display: 'contents',
        }}
      >
        <div ref={ref1} className="mt-5 h-full overflow-auto">
          <button
            onClick={() => {
              if (!ref1.current) return

              springScrollTo(0, ref1.current)
            }}
            className="mb-6 mt-2 hidden cursor-pointer appearance-none rounded-full border-transparent bg-blue-500 p-2 text-white"
          >
            Scroll to end
          </button>
          {Array.from({ length: 30 }).map((_, i) => (
            <p className="my-4" key={i}>
              Architecto possimus ipsa voluptas. vRShm 5Owkz Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              <div
                onClick={() => {
                  window.open(
                    'https://c.p2hp.com/yinxietu/',
                    '_blank',
                    'noreferrer',
                  )
                }}
                tabIndex={-1}
                className="h-4 appearance-none"
              >
                <img src="https://cdn.jsdelivr.net/gh/cupchino/fancy2024@main/2024/0919130517.png" />
              </div>
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.
            </p>
          ))}
        </div>
        <div className="mt-5 h-full overflow-auto" ref={ref2}>
          <button
            onClick={() => {
              if (!ref2.current) return

              ref2.current.scrollTo({
                behavior: 'smooth',
                top: 0,
              })
            }}
            className="mb-6 mt-2 hidden cursor-pointer appearance-none rounded-full border-transparent bg-blue-500 p-2 text-white"
          >
            Scroll to end
          </button>
          {Array.from({ length: 30 }).map((_, i) => (
            <p className="my-4" key={i}>
              Architecto possimus ipsa voluptas. Ut exercitationem eligendi
              laudantium libero libero ipsam at animi. Hic ratione ab voluptatum
              hic illum ea quisquam unde tempora. Id cum expedita est assumenda
              tempore doloribus explicabo quae consectetur. Eius at rem. Maxime
              exercitationem facilis odio ipsam. Aliquid repudiandae facere.
              Repellendus adipisci cumque maiores quo velit fuga similique eius
              nisi. Facere eius cumque repudiandae dolorum molestiae amet
              consequuntur beatae. Ipsum dolore occaecati. Quibusdam nam culpa
              accusamus deserunt doloribus sed. Modi harum quis cupiditate porro
              odio. Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio
              blanditiis.Architecto possimus ipsa voluptas. Ut exercitationem
              eligendi laudantium libero libero ipsam at animi. Hic ratione ab
              voluptatum hic illum ea quisquam unde tempora. Id cum expedita est
              assumenda tempore doloribus explicabo quae consectetur. Eius at
              rem. Maxime exercitationem facilis odio ipsam. Aliquid repudiandae
              facere. Repellendus adipisci cumque maiores quo velit fuga
              similique eius nisi. Facere eius cumque repudiandae dolorum
              molestiae amet consequuntur beatae. Ipsum dolore occaecati.
              Quibusdam nam culpa accusamus deserunt doloribus sed. Modi harum
              quis cupiditate porro odio. Porro id recusandae soluta numquam
              numquam distinctio blanditiis.Architecto possimus ipsa voluptas.
              Ut exercitationem eligendi laudantium libero libero ipsam at
              animi. Hic ratione ab voluptatum hic illum ea quisquam unde
              tempora. Id cum expedita est assumenda tempore doloribus explicabo
              quae consectetur. Eius at rem. Maxime exercitationem facilis odio
              ipsam. Aliquid repudiandae facere. Repellendus adipisci cumque
              maiores quo velit fuga similique eius nisi. Facere eius cumque
              repudiandae dolorum molestiae amet consequuntur beatae. Ipsum
              dolore occaecati. Quibusdam nam culpa accusamus deserunt doloribus
              sed. Modi harum quis cupiditate porro odio. Porro id recusandae
              soluta numquam numquam distinctio blanditiis.Architecto possimus
              ipsa voluptas. Ut exercitationem eligendi laudantium libero libero
              ipsam at animi. Hic ratione ab voluptatum hic illum ea quisquam
              unde tempora. Id cum expedita est assumenda tempore doloribus
              explicabo quae consectetur. Eius at rem. Maxime exercitationem
              facilis odio ipsam. Aliquid repudiandae facere. Repellendus
              adipisci cumque maiores quo velit fuga similique eius nisi. Facere
              eius cumque repudiandae dolorum molestiae amet consequuntur
              beatae. Ipsum dolore occaecati. Quibusdam nam culpa accusamus
              deserunt doloribus sed. Modi harum quis cupiditate porro odio.
              Porro id recusandae soluta numquam numquam distinctio blanditiis.
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpringScollContainerDemo
