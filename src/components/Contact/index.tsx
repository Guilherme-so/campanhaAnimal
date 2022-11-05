import Regex from "../../utils/regex";
import { Button } from "../Button";
import style from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yup } from "../../utils/schema";

interface IFormProps {
  completeName: string;
  contactNumber: string;
  description: string;
  email: string;
}

const schema = yup
  .object({
    completeName: yup.string().required(),
    email: yup.string().email().required(),
    contactNumber: yup.string().min(7).required(),
    description: yup.string().required(),
  })
  .required();

export function Contact() {
  const {register,handleSubmit,formState: { errors },setError,} = useForm<IFormProps>({});

  const onSubmit = (data: IFormProps) => {
    const { contactNumber } = data;
    const regex = new Regex(contactNumber).isPhoneNumber(true) as boolean;

    if (!regex) {
      setError("contactNumber", {
        type: "pattern",
        message: "Oops, este não um número válido. Tente (DDD) 000-0000",
      });
    }

    // todo send contact
  };

  return (
    <section className={style.contactContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.contactContent}>
          <h1>Entre em contato</h1>
          <p>
            {errors?.completeName && (
              <span className={style.error}>
                {errors.completeName?.message}
              </span>
            )}
            <input
              placeholder="Nome completo"
              id="completeName"
              className={`${errors?.completeName && style.inputError}`}
              {...register("completeName")}
            />
          </p>

          <p>
            {errors?.email && (
              <span className={style.error}>{errors.email?.message}</span>
            )}

            <input
              type="email"
              placeholder="E-mail"
              id="email"
              className={`${errors?.email && style.inputError}`}
              {...register("email")}
            />
          </p>

          <p>
            {errors?.contactNumber && (
              <span className={style.error}>
                {errors.contactNumber?.message}
              </span>
            )}

            <input
              type="string"
              placeholder="Whatsapp"
              className={`${errors?.contactNumber && style.inputError}`}
              {...register("contactNumber")}
              id="contactNumber"
            />
          </p>

          <p>
            {errors?.description && (
              <span className={style.error}>{errors.description?.message}</span>
            )}
            <textarea
              placeholder="Descrição"
              id="description"
              className={`${errors?.description && style.inputError}`}
              {...register("description")}
            />
          </p>

          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
}
