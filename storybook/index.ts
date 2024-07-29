import '../src/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { GithubCalendar } from '../src/components/GithubCalendar'
import { Copied } from '../src/components/Vlist'

ReactDOM.createRoot(document.getElementById('root')!).render(
  React.createElement(GithubCalendar),
)
