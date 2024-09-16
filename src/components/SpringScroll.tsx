import React from 'react'
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

  const c = React.useRef<HTMLDivElement>(null)
  return (
    <div
      // style={{
      //   background: `linear-gradient(to bottom, #8CA6DB, #B993D6)`,
      //   // height: 1000,
      // }}
      className="relative box-border flex h-[calc(300px+1rem)] w-full flex-row gap-4 overflow-auto px-4 font-sans"
    >
      <button
        className="absolute top-1 appearance-none rounded-full border-transparent bg-blue-500 px-2 py-1 text-white"
        onClick={() => {
          c.current?.querySelectorAll('button').forEach((e) => e.click())
        }}
      >
        Scroll
      </button>
      <button
        className="absolute left-24 top-1 appearance-none rounded-full border-transparent bg-blue-500 px-2 py-1 text-white"
        onClick={() => {
          if (!ref1.current) return

          springScrollTo(0, ref1.current)

          if (!ref2.current) return

          springScrollTo(0, ref2.current)
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

              springScrollTo(ref1.current.scrollHeight, ref1.current)
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
        <div className="mt-5 h-full overflow-auto" ref={ref2}>
          <button
            onClick={() => {
              if (!ref2.current) return

              ref2.current.scrollTo({
                behavior: 'smooth',
                top: ref2.current.scrollHeight,
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
