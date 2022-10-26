import { useState } from 'react'
import { Progress, Text } from '@mantine/core'

function progressNormal() {
  const [hovered, setHovered] = useState(-1)
  const reset = () => setHovered(-1)
  return (
    <>
      <Progress
        onMouseLeave={() => setHovered(-1)}
        size="xl"
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

export default progressNormal
