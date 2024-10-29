
import { ThemedLayoutV2 } from '@refinedev/mantine'
import { PropsWithChildren } from 'react'

const DashboardLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemedLayoutV2>
            {children}
        </ThemedLayoutV2>
    )
}

export default DashboardLayout