import {
  Box,
  Typography,
  Grid
} from "@mui/material";
import ConfirmationContactType from "./ConfirmationContactType";
import ConfirmationContactForm from './ConfirmationContactForm';
import s from "./index.module.scss";

const ConfirmationContactContainer: React.FC = () => {
  return (
    <Box className={s.confirmationContactContainer_card}>
      <Grid container spacing={2}>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <Typography className={s.confirmationContactContainer_title} variant="h4">
            Отправить чек
          </Typography>
          <ConfirmationContactType />
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <ConfirmationContactForm />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ConfirmationContactContainer