import { styled, TextField, TextFieldProps } from "@mui/material";
import { colors } from "../../enums/colors";
import { Controller, Control, FieldValues } from "react-hook-form";
import { MaskField } from 'react-mask-field';

export const UITransparentTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: colors.primaryGray50,
    color: colors.primaryGray900,
    fontSize: 22
  },
  "& .MuiInputBase-root.Mui-focused": {
    backgroundColor: colors.primaryGray50,
  },
  ".MuiInputBase-root:hover": {
    backgroundColor: colors.primaryGray50,
  },
  ".MuiFilledInput-root:before": {
    borderBottom: `2px solid ${colors.primaryGray800}`,
  },
  ".MuiFilledInput-root:after": {
    borderBottom: `2px solid ${colors.primaryGray800}`,
    backgroundColor: "transparent",
  },
  ".MuiFilledInput-root": { borderBottom: "0" },
  "& label.Mui-focused": {
    color: `${colors.primaryGray800}`,
  },
  "& label.MuiInputLabel-root": {
    color: `${colors.primaryGray800}`,
    fontSize: 20,
    fontFamily: "SourceSansPro-SemiBold, sant-serif"
  },
});

interface IFormProps {
  name: string;
  label: string;
  control: Control<FieldValues, any>;
  rules: object;
  mask: string
}

type TFormTextField = IFormProps & TextFieldProps;

const FormTextField: React.FC<TFormTextField> = ({ name, control, label, rules, ...props }) => {

  function CustomMaskField({ ...otherProps }) {
    return <MaskField mask={props.mask} replacement="_" {...otherProps} />;
  }


  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <UITransparentTextField
          {...props}
          InputProps={{ inputComponent: CustomMaskField, ...props.InputProps }}
          helperText={error ? error : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};

export { FormTextField };