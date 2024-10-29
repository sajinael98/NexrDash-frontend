"use client";

import { NotificationsProvider } from "@mantine/notifications";
import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";
import UiProvider from "@providers/ui-provider";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/mantine";
import routerProvider from "@refinedev/nextjs-router";
import "@styles/global.css";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

type RefineContextProps = {};

export const RefineContext = (
  props: React.PropsWithChildren<RefineContextProps>
) => {
  return (
    <SessionProvider>
      <App {...props} />
    </SessionProvider>
  );
};

type AppProps = {};

const App = (props: React.PropsWithChildren<AppProps>) => {
  const { data, status } = useSession();
  const to = usePathname();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <UiProvider>
      <NotificationsProvider position="bottom-right">
        <RefineKbarProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            authProvider={authProvider}
            notificationProvider={useNotificationProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
            }}
          >
            {props.children}
            <RefineKbar />
          </Refine>
        </RefineKbarProvider>
      </NotificationsProvider>
    </UiProvider>
  );
};
