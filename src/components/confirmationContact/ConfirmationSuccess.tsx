import {
  Box, Typography,
} from "@mui/material";
import s from "./index.module.scss";
import { CgShoppingBag } from "react-icons/cg";

const ConfirmationSuccess: React.FC = () => {
  return (
    <Box textAlign="center">
      <CgShoppingBag className={s.confarmitionSuccess_icon} />
      <Typography className={s.confarmitionSuccess_title} variant="h4">Спасибо за заказ</Typography>
      <Typography variant="h5">Чек будет отправлен на указанные данные, после оплаты</Typography>
    </Box>
  )
}

export default ConfirmationSuccess;