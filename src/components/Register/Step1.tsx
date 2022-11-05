import { useForm } from "react-hook-form";
import Regex from "../../utils/regex";
import { Button } from "../Button";
import styleLogin from "../../pages/style/login.module.scss";
import styleRegister from "../../pages/style/register.module.scss";
import { yup } from "../../utils/schema";


interface IBlurProps {
  data: string;
}

interface IFormProps {
  email: string;
  name: string;
  cpf: string;
  type: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    cpf: yup.string().required().min(11).max(20),
    name: yup.string().min(2).max(90).required(),
    type: yup.string().required(),
  })
  .required();

  
export function Step1({page, setPage}) {

  const {register,handleSubmit,formState: { errors },setError,getValues,setValue,} = useForm<IFormProps>({});

  const onBlurInput = ({ data }: IBlurProps) => {
    data = data.replace(/\D/g, "");
    const regex = new Regex(data);
    const type = getValues("type");

    switch (type.toLocaleLowerCase()) {
      case "ong":
        if (data.length === 14) {
          return regex.convertToCNPJ();
        }
        break;

      case "tutor":
        if (data.length === 11) {
          return regex.convertToCPF();
        }
        break;
    }

    return data;
  };

  const onSubmit = async (data: IFormProps) => {
    const { cpf } = data;
    const regex = new Regex(cpf);

    switch (getValues("type").toLocaleLowerCase()) {
      case "ong":
        if (cpf.length === 18) {
          try {
            regex.convertToCNPJ(true);
          } catch (e) {
            setError("cpf", {
              type: "pattern",
              message: "Oops, o CNPJ digitado é inválido.",
            });
          }
        } else {
          setError("cpf", {
            type: "pattern",
            message: "Oops, o CNPJ digitado é inválido.",
          });
        }
        break;

      case "tutor":
        if (cpf.length === 11) {
          try {
            regex.convertToCPF(true);
          } catch {
            setError("cpf", {
              type: "pattern",
              message: "Oops, o CPF digitado é inválido.",
            });
          }
        } else {
          setError("cpf", {
            type: "pattern",
            message: "Oops, o CPF digitado é inválido.",
          });
        }
        break;
    }

    setPage((atual) => atual + 1)
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
              <label htmlFor="name" className={`${errors?.email && "error"}`}>
                Nome
              </label>
              <input
                type="text"
                id="name"
                className={`${errors?.name && "inputError"}`}
                {...register("name")}
              />

              {errors?.name && (
                <span className="error">{errors.name.message}</span>
              )}
            </div>
            <div className={styleLogin.inputContent}>
              <label htmlFor="email" className={`${errors?.email && "error"}`}>
                E-mail 
              </label>
              <input
                type="email"
                id="email"
                className={`${errors?.email && "inputError"}`}
                {...register("email")}
              />

              {errors?.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>

            <div className={styleLogin.inputContent}>
              <label htmlFor="Telefone" className={`${errors?.email && "error"}`}>
              Telefone
              </label>
              <input
                type="Telefone"
                id="Telefone"
                className={`${errors?.email && "inputError"}`}
                
              />

              {errors?.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className={styleRegister.gridRight}>
            <div className={styleLogin.inputContent}>
              <label htmlFor="cpf" className={`${errors?.cpf && "error"}`}>
                CPF/CNPJ 
              </label>
              <input
                type="text"
                id="cpf"
                className={`${errors?.cpf && "inputError"}`}
                {...register("cpf")}
                onBlur={(e) =>
                  (e.target.value = onBlurInput({
                    data: e.target.value,
                  }).toString())
                }
              />

              {errors?.cpf && (
                <span className="error">{errors.cpf.message}</span>
              )}
            </div>

            <div className={styleLogin.inputContent}>
              <label htmlFor="type" className={`${errors?.type && "error"}`}>
                Tipo 
              </label>
              <select
                onChange={() => {
                  setValue("cpf", "");
                }}
                {...register("type")}
              >
                <option>Tutor</option>
                <option>ONG</option>
              </select>

              {errors?.type && (
                <span className="error">{errors.type.message}</span>
              )}
            </div>
            
            
          </div>

          <div id={styleRegister.gridFull}>
            <Button type="submit" >
              Próximo
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
