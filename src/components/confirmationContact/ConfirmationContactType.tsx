import {
  ToggleButtonGroup,
  Box
} from "@mui/material";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import s from "./index.module.scss";
import OrderGatewaySendTypeItem from "./ConfirmationContactTypeItem";
import ToggleButton from 'components/common/ToggleButton';
import { useDispatch, useSelector } from "react-redux";
import { selectTypeConfirm } from "store/confirmationContact/confirmationContact-selectors";
import { setTypeConfirm } from "store/confirmationContact/confirmationContact-reducer";

const ConfirmationContactType: React.FC = () => {
  const dispatch = useDispatch();

  const typeConfirm = useSelector(selectTypeConfirm);

  const handleSetTypeConfirm = (_: any, newAlignment: string | null) => {
    if (newAlignment !== null) {
      dispatch(setTypeConfirm(newAlignment));
    }
  }

  return (
    <Box className={s.confirmationContactType_container}>
      <ToggleButtonGroup
        className={s.confirmationContactType_toggleButtons}
        exclusive
        value={typeConfirm}
        onChange={handleSetTypeConfirm}
        fullWidth
      >
        <ToggleButton value="sms">
          <OrderGatewaySendTypeItem icon={<MdPhoneIphone className={s.confirmationContactTypeItem_icon} />} label="СМС" />
        </ToggleButton>
        <ToggleButton value="email">
          <OrderGatewaySendTypeItem icon={<MdEmail className={s.confirmationContactTypeItem_icon} />} label="Email" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

export default ConfirmationContactType;