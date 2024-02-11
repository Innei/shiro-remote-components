// import.meta.glob('../src/components/**').then((modules) => {

// })
import '../src/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import Firework from '../src/components/Firework'

ReactDOM.createRoot(document.getElementById('root')!).render(
  React.createElement(Firework),
)
