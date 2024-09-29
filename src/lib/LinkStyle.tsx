import React from 'react'

// @ts-expect-error
import styles from '../index.css?url'

export const LinkStyle = () => {
  return <link rel="stylesheet" href={styles} />
}
