import {
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeConfirm, selectLoading, selectIsConfirm, selectError } from "store/confirmationContact/confirmationContact-selectors";
import { confirmationContactOrder } from "store/confirmationContact/confirmationContact-actions";
import { Button, FormTextField } from "components/common";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { emailPattern } from "utils/form/patterns";
import { MaskField } from "react-mask-field";
import { useNavigate, useParams } from "react-router-dom";
import { REQUEST_STATUS } from "enums/api";
import { TOrderAttributes } from "types/order";

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
  const error = useSelector(selectError);

  const { orderGuid } = useParams<TOrderAttributes>();

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
      dispatch(confirmationContactOrder({
        orderGuid: orderGuid || "",
        value: data.phone
      }));
    } else {
      dispatch(confirmationContactOrder({
        orderGuid: orderGuid || "",
        value: data.email
      }));
    }
  });

  function MobileMaskField({ ...otherProps }) {
    return (
      <MaskField mask="(9__) ___-__-__" replacement={{ _: /\d/ }}
        separate
        type="number"
        {...otherProps}
      />
    );
  }

  useEffect(() => {
    reset()
  }, [typeConfirm]);

  if (error && loading === REQUEST_STATUS.fulfilled) {
    navigate("/error");
  }

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
                placeholder="Введите номер телефона"
                register={register}
                rules={{
                  required: "Введите корректный номер телефона", minLength: {
                    value: 15,
                    message: "Введите корректный номер телефона",
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
                placeholder="Введите email"
                type="email"
                name="email"
                autocomplete="email"
                register={register}
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