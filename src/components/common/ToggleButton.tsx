import { ToggleButton as ToggleButtonMui, ToggleButtonProps } from "@mui/lab";
import s from "./index.module.scss";

const ToggleButton: React.FC<ToggleButtonProps> = ({ children, ...props }) => {
  return (
    <ToggleButtonMui classes={{ root: s.toggleButton, selected: s.toggleButton_selected }} {...props}>
      {children}
    </ToggleButtonMui>
  )
}

export { ToggleButton }
export default ToggleButton;