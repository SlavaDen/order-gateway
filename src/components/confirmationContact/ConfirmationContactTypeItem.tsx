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

const ConfirmationContactTypeItem: React.FC<IOrderGatewaySendTypeItem> = (props) => {

  const { icon, label } = props;

  return (
    <Stack>
      <Box>
        {icon}
      </Box>
      <Typography className={s.confirmationContactTypeItem_label} variant="h6">
        {label}
      </Typography>
    </Stack>
  )
}

export default ConfirmationContactTypeItem;