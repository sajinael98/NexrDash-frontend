import { ActionIcon, Menu } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import React from "react";

const Notifications = () => {
  return (
    <Menu withArrow withinPortal>
      <Menu.Target>
        <ActionIcon>
          <IconBell />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown></Menu.Dropdown>
    </Menu>
  );
};

export default Notifications;
