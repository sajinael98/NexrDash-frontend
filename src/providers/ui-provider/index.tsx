import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";

const UiProvider = ({ children }: PropsWithChildren) => {
  const preferedColorSchema = localStorage.getItem("colorSchema") ?? "light";
  const [colorScheme, setColorSchema] = useState<ColorScheme>(
    preferedColorSchema as ColorScheme
  );
  const theme = useMemo<MantineThemeOverride>(
    () => ({ colorScheme }),
    [colorScheme]
  );

  function toggleColorScheme(schema?: ColorScheme) {
    if (schema) {
      setColorSchema(schema);
    } else {
      setColorSchema(colorScheme === "light" ? "dark" : "light");
    }
  }

  useEffect(() => {
    localStorage.setItem("colorSchema", colorScheme);
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default UiProvider;
