import { Backdrop as BackdropMui, BackdropProps, CircularProgress, Stack, Typography, Box } from "@mui/material";
import s from "./index.module.scss";

interface IProps {
  label: string
}

type TBackdrop = IProps & BackdropProps

const Backdrop: React.FC<TBackdrop> = ({ ...props }) => {
  return (
    <BackdropMui
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      {...props}
    >
      <Stack spacing={1}>
        <Box textAlign="center">
          <CircularProgress color="inherit" className={s.circularProgress} />
        </Box>
        <Typography className={s.backgroud_label}>{props?.label}</Typography>
      </Stack>
    </BackdropMui >
  )
}

export { Backdrop }
export default Backdrop;