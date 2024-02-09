import { useState } from 'react'
import { styled } from 'styled-components'

const { ShiroComponents } = window
const { StyledButton } = ShiroComponents

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`
export const Card = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Title>Hover to change color.</Title>
      <StyledButton
        onClick={() => {
          setCount((c) => c + 10)
        }}
      >
        {count}
      </StyledButton>
    </div>
  )
}
