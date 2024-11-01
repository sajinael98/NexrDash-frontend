"use client"

import { Box, Image, MediaQuery, Menu, Text, UnstyledButton } from '@mantine/core'
import { useGetIdentity } from '@refinedev/core'
import { IconLogout, IconUser } from '@tabler/icons-react'
import { User } from 'next-auth'

const UserAvatar = () => {
    const { data, isLoading } = useGetIdentity<User>()
    if (isLoading) {
        return null
    }
    const user = data as User

    return (
        <Menu position='bottom-end' withArrow >
            <Menu.Target>
                <UnstyledButton sx={(theme) => ({ display: "flex", gap: theme.spacing.md, alignItems: "flex-start" })}>
                    <Image radius="xl" width={40} height={40} src={user.image} />
                    <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                        <Box >
                            <Text fz="sm" fw={500} tt="capitalize">{user.fullName}</Text>
                            <Text fw={"lighter"} fz="xs">{user.username}</Text>
                        </Box>
                    </MediaQuery>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item icon={<IconUser size="1rem" />}>Profile</Menu.Item>
                <Menu.Item color='red' icon={<IconLogout size="1rem" />}>Logout</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default UserAvatar