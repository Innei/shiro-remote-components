import React from 'react'
import ActivityCalendar from 'react-github-calendar'

import { Tooltip } from '@/ui/tooltip'

import '../index.css'

const GithubCalendar = () => {
  return (
    <ActivityCalendar
      username="Innei"
      renderBlock={(block, activity) => {
        return (
          <Tooltip
            triggerAsChild
            content={`${activity.count} activities on ${activity.date}`}
          >
            {block}
          </Tooltip>
        )
      }}
    />
  )
}
export default GithubCalendar
