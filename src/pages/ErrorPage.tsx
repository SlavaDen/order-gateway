import {
  Grid,
} from "@mui/material";
import Error from "components/error/Error";
import s from "./index.module.scss";

const ErrorPage: React.FC = () => {
  return (
    <Grid container className={s.orderNotFound_container}>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <Error />
      </Grid>
    </Grid>
  )
}

export default ErrorPage;