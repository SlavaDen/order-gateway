import {
  Box,
} from "@mui/material";

interface IPrimaryLayout {
  children: React.ReactNode
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default PrimaryLayout;