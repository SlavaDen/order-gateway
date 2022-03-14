import {
  ToggleButtonGroup,
  Box,
} from "@mui/material";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import s from "./index.module.scss";
import OrderGatewaySendTypeItem from "./OrderGatewaySendTypeItem";
import ToggleButton from 'components/common/ToggleButton';
import { useDispatch, useSelector } from "react-redux";
import { selectTypeSend } from "store/orderSender/orderSender-selectors";
import { setTypeSend } from "store/orderSender/orderSender-reducer";

const OrderGatewaySendType: React.FC = () => {
  const dispatch = useDispatch();

  const typeSend = useSelector(selectTypeSend);

  const handleSetTypeSend = (_: any, newAlignment: string | null) => {
    dispatch(setTypeSend(newAlignment));
  }

  return (
    <Box className={s.sendType_container}>
      <ToggleButtonGroup
        exclusive
        value={typeSend}
        onChange={handleSetTypeSend}
        fullWidth
      >
        <ToggleButton value="sms">
          <OrderGatewaySendTypeItem icon={<MdPhoneIphone className={s.sendTypeItem_icon} />} label="СМС" />
        </ToggleButton>
        <ToggleButton value="email">
          <OrderGatewaySendTypeItem icon={<MdEmail className={s.sendTypeItem_icon} />} label="Email" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

export default OrderGatewaySendType;