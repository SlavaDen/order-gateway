import {
  Grid,
} from "@mui/material";
import Backdrop from "components/common/Backdrop";
import ConfirmationContactContainer from "components/confirmationContact/ConfirmationContactContainer";
import { REQUEST_STATUS } from "enums/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkOrder } from "store/order/order-actions";
import { selectStatusOrder } from "store/order/order-selectors";
import { TOrderAttributes } from 'types/order';
import s from "./index.module.scss";

const GatewayPage: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { orderGuid } = useParams<TOrderAttributes>();

  const {
    loading: loadingOrder,
    error: errorOrder,
    isOrder
  } = useSelector(selectStatusOrder);

  useEffect(() => {
    dispatch(checkOrder({
      orderGuid: orderGuid || ""
    }));
  }, [orderGuid]);

  if (!isOrder && loadingOrder === REQUEST_STATUS.rejected) {
    navigate("/order/not-found");
  }


  if (loadingOrder === REQUEST_STATUS.pending) {
    return (<Backdrop open={true} label="Получение информации о заказе" />)
  }

  return (
    <Grid container>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12} className={s.orderGateway_container}>
        <Grid
          className={s.orderGateway_container}
          spacing={0}
        >
          <ConfirmationContactContainer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GatewayPage;