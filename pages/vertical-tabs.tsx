import { Box, Tabs, TextInput } from '@mantine/core'
import { ReactNode, useEffect, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

enum AdminTab {
  Overview = 'overview',
  Users = 'users',
  Orders = 'orders',
  Configuration = 'configuration',
}

const tabs: Record<AdminTab, { panel: ReactNode }> = {
  [AdminTab.Overview]: { panel: <Box>overview</Box> },
  [AdminTab.Users]: { panel: <Box>users</Box> },
  [AdminTab.Orders]: { panel: <Box>orders</Box> },
  [AdminTab.Configuration]: { panel: <Box>conf</Box> },
}

const AdminSearchArray = ['users', 'orders', 'configuration'] as const
type AdminSearch = typeof AdminSearchArray[number]

export default function VT() {
  const [search, setSearch] = useState<string>('')
  const [searchFor, setSearchFor] = useState<AdminSearch>('users')

  useEffect(() => {
    console.log({ [searchFor]: search })
  }, [search, searchFor])

  return (
    <Box
      sx={(theme) => ({
        height: '100%',
        width: '100%',
        border: `1px solid ${theme.fn.rgba(theme.black, 0.1)}`,
        borderRadius: 4,
      })}
    >
      <Tabs
        orientation="vertical"
        styles={{
          tabsList: { height: '100%' },
          tab: { fontSize: 18 },
          root: { height: '100%' },
        }}
        value={searchFor}
        onTabChange={(v) => setSearchFor(v as AdminSearch)}
      >
        <Tabs.List sx={{ height: '100%' }}>
          {Object.keys(tabs).map((t, i) => (
            <Tabs.Tab value={t} key={i}>
              {Object.entries(AdminTab).find(([k, v]) => v === t)?.[1] ?? '-'}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
          p={10}
        >
          <TextInput
            defaultValue=""
            onChange={(e) => setSearch(e.currentTarget.value)}
            variant="filled"
            placeholder="Search..."
            icon={<MagnifyingGlass />}
          />
          {Object.keys(tabs).map((t, i) => (
            <Tabs.Panel value={t} key={i}>
              {
                tabs[
                  Object.entries(AdminTab).find(([k, v]) => v === t)?.[1] ??
                    'overview'
                ].panel
              }
            </Tabs.Panel>
          ))}
        </Box>
      </Tabs>
    </Box>
  )
}
