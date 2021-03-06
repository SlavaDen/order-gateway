import {
  Grid
} from "@mui/material";
import ConfirmationSuccess from 'components/confirmationContact/ConfirmationSuccess';

const ConfirmationSuccessPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12} textAlign="center">
        <ConfirmationSuccess />
      </Grid>
    </Grid>
  )
}

export default ConfirmationSuccessPage;