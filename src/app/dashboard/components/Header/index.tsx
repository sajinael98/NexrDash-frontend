"use client";

import {
  ActionIcon,
  Autocomplete,
  Group,
  Header,
  MediaQuery,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMenu2, IconMoonStars, IconSun } from "@tabler/icons-react";
import Notifications from "../Notifications";
import UserAvatar from "../UserAvatar";
import { RefineTitle, useThemedLayoutContext } from "@refinedev/mantine";

const DashboardHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { setMobileSiderOpen } = useThemedLayoutContext();
  return (
    <Header height={64} pr={"md"} pl={{ base: "md", lg: 0 }}>
      <Group h="100%" position="apart">
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Autocomplete
            data={[]}
            placeholder="search for resource..."
            size="xs"
            w={250}
          />
        </MediaQuery>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Group>
            <IconMenu2 onClick={setMobileSiderOpen} />
            <RefineTitle collapsed />
          </Group>
        </MediaQuery>
        <Group>
          <ActionIcon onClick={() => toggleColorScheme()}>
            {colorScheme === "dark" ? <IconMoonStars /> : <IconSun />}
          </ActionIcon>
          <Notifications />
          <UserAvatar />
        </Group>
      </Group>
    </Header>
  );
};

export default DashboardHeader;
