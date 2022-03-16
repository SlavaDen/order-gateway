import { styled, TextField, TextFieldProps } from "@mui/material";
import { colors } from "../../enums/colors";
import { Path, RegisterOptions, UseFormRegister, DeepMap, FieldError } from "react-hook-form";

export const UITransparentTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: colors.primaryGray50,
    color: colors.primaryGray900,
    borderRadius: 15,
    borderTopLeftRadius: 15,
    fontSize: 22
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${colors.primaryBlue400}`,
  },
  "& .MuiInputBase-root.Mui-focused": {
    backgroundColor: colors.primaryGray50,
  },
  "& label.Mui-focused": {
    color: `${colors.primaryGray800}`,
  },
  "& label.MuiInputLabel-root": {
    color: `${colors.primaryGray800}`,
    fontSize: 20,
    fontFamily: "SFProDisplay-Medium, sant-serif"
  },
  ".MuiFormHelperText-root": {
    fontSize: 16,
    color: colors.primaryRed400,
    fontFamily: "SFProDisplay-Medium, sant-serif"
  }
});

export type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  mask?: string;
  autocomplete?: string;
} & Omit<TextFieldProps, 'name'>;

const FormTextField = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {

  return (
    <UITransparentTextField
      name={name}
      {...props}
      {...(register && register(name, rules))}
    />
  );
};


export { FormTextField };