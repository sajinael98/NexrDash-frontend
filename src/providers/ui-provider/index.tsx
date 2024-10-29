import { MantineProvider } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

const UiProvider = ({ children }: PropsWithChildren) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    )
}

export default UiProvider