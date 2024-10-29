"use client";

import { Suspense } from "react";

import { Authenticated, WelcomePage, useIsAuthenticated } from "@refinedev/core";

export default function IndexPage() {
  const {data} = useIsAuthenticated()
  console.log(data)
  return (
    <Authenticated key="home">
      <Suspense>
        <WelcomePage />
      </Suspense>
    </Authenticated>
  );
}
