import { useState } from 'react'
import { RingProgress, Text } from '@mantine/core'

function ProgressRound() {
  const [hovered, setHovered] = useState(-1)
  const reset = () => setHovered(-1)
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          {
            value: 40,
            color: 'cyan',
            onMouseEnter: () => setHovered(0),
            onMouseLeave: reset,
          },
          {
            value: 20,
            color: 'blue',
            onMouseEnter: () => setHovered(1),
            onMouseLeave: reset,
          },
          {
            value: 15,
            color: 'indigo',
            onMouseEnter: () => setHovered(2),
            onMouseLeave: reset,
          },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  )
}

export default ProgressRound
