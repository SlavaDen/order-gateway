import {
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeConfirm, selectLoading, selectIsConfirm } from "store/confirmationContact/confirmationContact-selectors";
import { confirmationContactOrder } from "store/confirmationContact/confirmationContact-actions";
import { Button, FormTextField } from "components/common";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { emailPattern } from "utils/form/patterns";
import { MaskField } from "react-mask-field";
import { useNavigate } from "react-router-dom";
import { REQUEST_STATUS } from "enums/api";

type TFormValues = {
  phone: string;
  email: string;
};

const ConfirmationContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const typeConfirm = useSelector(selectTypeConfirm);
  const loading = useSelector(selectLoading);
  const isConfirm = useSelector(selectIsConfirm);

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

  const onSubmit = handleSubmit((data) => {
    if (typeConfirm === "sms") {
      dispatch(confirmationContactOrder(typeConfirm, data.phone));
    } else {
      dispatch(confirmationContactOrder(typeConfirm, data.email));
    }
  });

  function MobileMaskField({ ...otherProps }) {
    return <MaskField mask="(___) ___-__-__" replacement={{ _: /\d/ }} showMask
      separate type="number" {...otherProps} />;
  }

  useEffect(() => {
    reset()
  }, [typeConfirm]);

  if (isConfirm) {
    navigate("/confirmation-success");
  }

  return (
    <form onSubmit={onSubmit} className={s.confirmationContact_form}>
      <Grid container spacing={3}>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          {
            typeConfirm === "sms" ? (
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
                  startAdornment: <InputAdornment position="start"><Typography className={s.confirmationContact_adornment}> +7</Typography></InputAdornment>,
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
          <Button fullWidth type="submit" size="large" loading={Boolean(loading === REQUEST_STATUS.pending)}>
            Применить
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ConfirmationContactForm;