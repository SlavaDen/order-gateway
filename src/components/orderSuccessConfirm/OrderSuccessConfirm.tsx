import {
  Box, Stack, Typography,
} from "@mui/material";
import s from "./index.module.scss";
import { BiShoppingBag } from "react-icons/bi";

const OrderSuccessConfirm: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Box textAlign="center">
        <BiShoppingBag className={s.successConfirm_icon} />
      </Box>
      <Typography className={s.successConfirm_title} variant="h4">Спасибо за заказ</Typography>
      <Typography variant="h5">Чек будет отправлен на указанные данные, после оплаты</Typography>
    </Stack>
  )
}

export default OrderSuccessConfirm;