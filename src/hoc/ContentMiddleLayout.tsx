import {
  Box,
} from "@mui/material";
import s from "./index.module.scss";

interface IContentMiddleLayout {
  children: React.ReactNode
}

const ContentMiddleLayout: React.FC<IContentMiddleLayout> = ({ children }) => {
  return (
    <Box className={s.contentMiddleLayout}>
      {children}
    </Box>
  )
}

export default ContentMiddleLayout;