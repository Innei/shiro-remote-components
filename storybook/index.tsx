import '../src/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import SpringScollContainerDemo from '../src/components/SpringScroll'
import { Copied } from '../src/components/Vlist'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="relative h-screen w-screen overflow-hidden">
    <SpringScollContainerDemo />
  </div>,
)
