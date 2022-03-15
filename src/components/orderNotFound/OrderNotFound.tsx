import {
  Box, Typography,
} from "@mui/material";
import s from "./index.module.scss";
import { CgShoppingBag } from "react-icons/cg";

const OrderNotFound: React.FC = () => {
  return (
    <Box textAlign="center">
      <CgShoppingBag className={s.orderNotFound_icon} />
      <Typography className={s.orderNotFound_title} variant="h4">
        Извините
      </Typography>
      <Typography variant="h5">
        Заказ не найден
      </Typography>
    </Box>
  )
}

export default OrderNotFound;