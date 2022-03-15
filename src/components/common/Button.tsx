import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import s from "./index.module.scss";

const Button: React.FC<LoadingButtonProps> = ({ children, ...props }) => {
  return (
    <LoadingButton
      classes={{
        root: s.button,
        loading: s.button_loading,
        loadingIndicator: s.button_loadingIndicator,
      }}
      {...props}
    >
      {children}
    </LoadingButton>
  )
}

export { Button }
export default Button;