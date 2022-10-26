import type { NextPage } from 'next'
import { Box } from '@mantine/core'
import { Tabs } from '@mantine/core'
import Ratings from './ratings'
import Progress from './progressSectionsExample'
import ProgressRound from './progressSectionRoundExample'
const Vtabs: NextPage = () => {
  return (
    <Box
      component="main"
      sx={{
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
    >
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Tabs defaultValue="gallery" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="Ratings">Ratings</Tabs.Tab>
            <Tabs.Tab value="Progress">Progress</Tabs.Tab>
            <Tabs.Tab value="ProgressRound">Progress Round</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Ratings">
            <Ratings />
          </Tabs.Panel>
          <Tabs.Panel value="Progress">
            <Progress />
          </Tabs.Panel>
          <Tabs.Panel value="ProgressRound">
            <ProgressRound />
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Vtabs
