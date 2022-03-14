import {
  Grid,
} from "@mui/material";
import OrderGatewaySendCheckContainer from "components/orderGateway/OrderGatewaySendCheckContainer";
import s from "./index.module.scss";

const OrderGatewayPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12} className={s.orderGateway_container}>
        <Grid
          className={s.orderGateway_container}
          spacing={0}
        >
          <OrderGatewaySendCheckContainer />
        </Grid>
      </Grid>
    </Grid>

  )
}

export default OrderGatewayPage;