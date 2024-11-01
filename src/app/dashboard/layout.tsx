import { ThemedLayoutV2 } from "@refinedev/mantine";
import { PropsWithChildren } from "react";
import { DashboardHeader } from "./components";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return <ThemedLayoutV2 Header={DashboardHeader}>{children}</ThemedLayoutV2>;
};

export default DashboardLayout;
