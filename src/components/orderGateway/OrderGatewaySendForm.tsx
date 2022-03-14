import {
  Card,
  Typography,
  Grid,
  InputAdornment,
} from "@mui/material";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeSend } from "store/orderSender/orderSender-selectors";
import { setTypeSend } from "store/orderSender/orderSender-reducer";
import { Button, FormTextField } from "components/common";
import { useForm, Resolver } from "react-hook-form";

type TFormValues = {
  value: string;
};

const resolver: Resolver<TFormValues> = async (values) => {
  return {
    values: !values.value ? {} : values,
    errors: !values.value
      ? {
        value: {
          type: "required",
          message: "This is required."
        }
      }
      : {}
  };
};

const OrderGatewaySendForm: React.FC = () => {
  const dispatch = useDispatch();

  const typeSend = useSelector(selectTypeSend);

  const defaultValues = {
    value: ""
  };

  const { control, formState: errors, handleSubmit } = useForm<TFormValues>({
    resolver: resolver,
    defaultValues: defaultValues
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className={s.sendForm}>
      <Grid container spacing={3}>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <FormTextField
            name="value"
            control={control}
            label="Номер телефона"
            fullWidth
            rules={{
              required: true,
              minLength: {
                value: 13,
                message: "Введите номер",
              },
              maxLength: {
                value: 13,
                message: "Введите номер",
              },
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><Typography className={s.sendForm_adornment}> +7</Typography></InputAdornment>,
            }}
            error={errors?.value}
            helperText={errors?.value}
            variant="filled"
            mask="___-___-__-__"
          />
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <Button fullWidth type="submit" size="large">
            Применить
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default OrderGatewaySendForm;