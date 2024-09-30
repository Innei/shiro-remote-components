import React from 'react'
import { getGlobalComponent } from 'shiro-types'

const ShiroButton = getGlobalComponent('Button')
export const Button = ({ label }: { label: string }) => {
  return <ShiroButton>{label}</ShiroButton>
}
