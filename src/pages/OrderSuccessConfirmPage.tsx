import {
  Grid
} from "@mui/material";
import s from "./index.module.scss";
import OrderSuccessConfirm from 'components/orderSuccessConfirm/OrderSuccessConfirm';

const OrderSuccessConfirmPage: React.FC = () => {
  return (
    <Grid container className={s.page_container}>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12} textAlign="center">
        <OrderSuccessConfirm />
      </Grid>
    </Grid>
  )
}

export default OrderSuccessConfirmPage;