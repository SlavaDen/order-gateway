import { Button as ButtonMui, ButtonProps } from "@mui/material";
import s from "./index.module.scss";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonMui classes={{ root: s.button }} {...props}>
      {children}
    </ButtonMui>
  )
}

export { Button }
export default Button;