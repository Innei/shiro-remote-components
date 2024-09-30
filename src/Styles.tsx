import React from 'react'

const styles = import.meta.env.DEV
  ? new URL('index.css', import.meta.url).href
  : new URL('../dist/index.css', import.meta.url).href

export const Styles = () => {
  return <link rel="stylesheet" href={styles} />
}
