import {
  Box, Typography,
} from "@mui/material";
import s from "./index.module.scss";
import { MdOutlineError } from "react-icons/md";

const Error: React.FC = () => {
  return (
    <Box textAlign="center">
      <MdOutlineError className={s.error_icon} />
      <Typography className={s.error_title} variant="h4">
        Произошла ошибка
      </Typography>
      <Typography variant="h5">
        Сообщите об этом кассиру или менеджеру ресторана
      </Typography>
    </Box>
  )
}

export default Error;