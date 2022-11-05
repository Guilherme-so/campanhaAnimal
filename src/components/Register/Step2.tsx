import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import styleLogin from "../../pages/style/login.module.scss";
import styleRegister from "../../pages/style/register.module.scss";
import { yup } from "../../utils/schema";
import { Button } from "../Button";
import { IAddressProps } from "../../interfaces/RegisterContextProps";
import cep from "cep-promise";
import { useRegisterSteps } from "../../hooks/useRegisterSteps";
interface IBlurProps {
  data: string;
}

interface ICepData {
  cep: string | number;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
}

const schema = yup
  .object({
    cep: yup.string().required(),
    complement: yup.string(),
    street: yup.string().required(),
    district: yup.string().required(),
    houseNumber: yup.number().positive(),
    city: yup.string().required(),
  })
  .required();

export function Step2({page, setPage}) {


  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
  } = useForm<IAddressProps>({});

  const onBlurInput = async ({ data }: IBlurProps) => {
    if (data.replace(/[^0-9-]/g, "").length === 8) {
      try {
        if (errors?.cep) {
          clearErrors("cep");
        }
        const findLocaleByCEP: ICepData = await cep(data);
        setValue("city", findLocaleByCEP.city);
        setValue("street", findLocaleByCEP.street);
        setValue("district", findLocaleByCEP.neighborhood);
      } catch {
        setError("cep", {
          type: "error",
          message: "CEP Inválido",
        });
      }
    }
  };

  const onSubmit = async (data: IAddressProps) => {
    setPage(atual => atual +1)
  };

  return (
    <>
      <form
        className={styleLogin.boxContent}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div id={styleRegister.gridForm}>
          <div className={styleRegister.gridLeft}>
            <div className={styleLogin.inputContent}>
              <label htmlFor="cep" className={`${errors?.cep && "error"}`}>
                CEP 
              </label>
              <input
                type="text"
                id="cep"
                className={`${errors?.cep && "inputError"}`}
                {...register("cep")}
                onBlur={(e) => onBlurInput({ data: e.target.value })}
              />

              {errors?.cep && (
                <span className="error">{errors.cep.message}</span>
              )}
            </div>
            <div className={styleLogin.inputContent}>
              <label
                htmlFor="complement"
                className={`${errors?.complement && "error"}`}
              >
                Complemento
              </label>
              <input
                type="text"
                id="complement"
                className={`${errors?.complement && "inputError"}`}
                {...register("complement")}
              />

              {errors?.complement && (
                <span className="error">{errors.complement.message}</span>
              )}
            </div>

            <div className={styleLogin.inputContent}>
              <label
                htmlFor="district"
                className={`${errors?.district && "error"}`}
              >
                Bairro 
              </label>
              <input
                type="text"
                id="district"
                className={`${errors?.district && "inputError"}`}
                {...register("district")}
              />

              {errors?.district && (
                <span className="error">{errors.district.message}</span>
              )}
            </div>
          </div>

          <div className={styleRegister.gridRight}>
            <div className={styleLogin.inputContent}>
              <label
                htmlFor="street"
                className={`${errors?.street && "error"}`}
              >
                Endereço 
              </label>
              <input
                type="text"
                id="street"
                className={`${errors?.street && "inputError"}`}
                {...register("street")}
              />

              {errors?.street && (
                <span className="error">{errors.street.message}</span>
              )}
            </div>

            <div className={styleLogin.inputContent}>
              <label
                htmlFor="number"
                className={`${errors?.houseNumber && "error"}`}
              >
                Número
              </label>
              <input
                type="number"
                id="number"
                className={`${errors?.houseNumber && "inputError"}`}
                {...register("houseNumber")}
              />

              {errors?.houseNumber && (
                <span className="error">{errors.houseNumber.message}</span>
              )}
            </div>

            <div className={styleLogin.inputContent}>
              <label htmlFor="city" className={`${errors?.city && "error"}`}>
                Cidade 
              </label>
              <input
                type="text"
                id="city"
                className={`${errors?.city && "inputError"}`}
                {...register("city")}
              />

              {errors?.city && (
                <span className="error">{errors.city.message}</span>
              )}
            </div>
          </div>

          <div id={styleRegister.gridFull}>
            <Button type="submit">Próximo</Button>
          </div>
        </div>
      </form>
    </>
  );
}
