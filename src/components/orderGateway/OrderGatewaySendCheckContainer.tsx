import {
  Card,
  Box,
  Typography,
  Grid
} from "@mui/material";
import OrderGatewaySendType from "./OrderGatewaySendType";
import OrderGatewaySendForm from './OrderGatewaySendForm';
import s from "./index.module.scss";

const OrderGatewaySendCheckContainer: React.FC = () => {
  return (
    <Box className={s.sendCheck_card}>
      <Grid container spacing={2}>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <Typography className={s.sendCheck_title} variant="h4">
            Отправить чек
          </Typography>
          <OrderGatewaySendType />
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <OrderGatewaySendForm />
        </Grid>
      </Grid>
    </Box>
  )
}

export default OrderGatewaySendCheckContainer;