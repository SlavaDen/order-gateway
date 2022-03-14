import {
  Grid,
} from "@mui/material";
import Backdrop from "components/common/Backdrop";
import OrderGatewaySendCheckContainer from "components/orderGateway/OrderGatewaySendCheckContainer";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "store/orderSender/orderSender-reducer";
import { selectOrderStatus } from "store/orderSender/orderSender-selectors";
import s from "./index.module.scss";

const OrderGatewayPage: React.FC = () => {

  const dispatch = useDispatch();
  const {
    loading,
    error
  } = useSelector(selectOrderStatus);


  setTimeout(() => dispatch(setLoading(false)), 1000);

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
      {
        loading && <Backdrop open={true} label="Получение данных заказа" />
      }
    </Grid>

  )
}

export default OrderGatewayPage;