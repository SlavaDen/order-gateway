import {
  Grid,
} from "@mui/material";
import OrderNotFound from "components/orderNotFound/OrderNotFound";
import s from "./index.module.scss";

const OrderNotFoundPage: React.FC = () => {
  return (
    <Grid container className={s.orderNotFound_container}>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <OrderNotFound />
      </Grid>
    </Grid>
  )
}

export default OrderNotFoundPage;