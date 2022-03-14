import {
  Grid, InputAdornment, Typography,
  TextField
} from "@mui/material";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeSend } from "store/orderSender/orderSender-selectors";
import { Button, FormTextField } from "components/common";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { emailPattern } from "utils/form/patterns";
import { MaskField } from "react-mask-field";

type TFormValues = {
  phone: string;
  email: string;
};

const OrderGatewaySendForm: React.FC = () => {
  const dispatch = useDispatch();

  const typeSend = useSelector(selectTypeSend);

  const defaultValues = {
    phone: "",
    email: ""
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: defaultValues
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  function MobileMaskField({ ...otherProps }) {
    return <MaskField mask="(___) ___-__-__" replacement={{ _: /\d/ }} showMask
      separate type="number" {...otherProps} />;
  }

  useEffect(() => {
    reset()
  }, [typeSend]);

  return (
    <form onSubmit={onSubmit} className={s.sendForm}>
      <Grid container spacing={3}>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          {
            typeSend === "sms" ? (
              <FormTextField<TFormValues>
                name="phone"
                label="Номер телефона"
                register={register}
                variant="filled"
                rules={{
                  required: "Введите номер телефона", minLength: {
                    value: 15,
                    message: "Введите номер телефона",
                  },
                }}
                helperText={errors?.phone?.message}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Typography className={s.sendForm_adornment}> +7</Typography></InputAdornment>,
                  inputComponent: MobileMaskField,
                }}
                type="tel"
                autocomplete="tel"
              />
            ) : (
              <FormTextField<TFormValues>
                label="Email"
                type="email"
                name="email"
                autocomplete="email"
                register={register}
                variant="filled"
                rules={{ required: "Введите email", pattern: emailPattern, }}
                helperText={errors?.email?.message}
                fullWidth
              />
            )
          }
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