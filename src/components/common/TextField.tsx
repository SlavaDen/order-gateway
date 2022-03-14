import { TextField, TextFieldProps } from "@mui/material";
import { Controller, Control, FieldValues } from "react-hook-form";
import { MaskField } from 'react-mask-field';

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
        <TextField
          {...props}
          InputProps={{ ...props.InputProps }}
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