import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import s from "./index.module.scss";

interface IOrderGatewaySendTypeItem {
  icon: React.ReactNode,
  label: string
}

const OrderGatewaySendTypeItem: React.FC<IOrderGatewaySendTypeItem> = (props) => {

  const { icon, label } = props;

  return (
    <Stack className={s.sendTypeItem_container}>
      <Box>
        {icon}
      </Box>
      <Typography className={s.sendTypeItem_label} variant="h6">{label}</Typography>
    </Stack>
  )
}

export default OrderGatewaySendTypeItem;