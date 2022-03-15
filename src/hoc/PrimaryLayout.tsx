import {
  Box,
} from "@mui/material";
import s from "./index.module.scss";

interface IPrimaryLayout {
  children: React.ReactNode
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <Box className={s.primaryLayout_content}>
      {children}
    </Box>
  )
}

export default PrimaryLayout;