import React , {FC, ReactNode} from 'react'
import { Box } from '@mui/system'
import Navbar from './Navbar'



interface LayoutProps {
    children : ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
}

export default Layout

interface LayoutWrapperProps  {
    children : ReactNode
}

const LayoutWrapper:FC<LayoutWrapperProps> = ({children}) => {
  
    return (
        <Box width="100%" display="flex" border="2px solid green" flexDirection="column" height="100vh" >
            <Box flexShrink="initial" >
                <Navbar/>
            </Box>
            <Box flex="1 0 auto">{children}</Box>
        </Box>
    );
};
