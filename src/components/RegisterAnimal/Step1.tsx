import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Regex from '../../utils/regex';

import styleLogin from '../../pages/style/login.module.scss';
import styleRegister from '../../pages/style/register.module.scss';
import { yup } from '../../utils/schema';
import { Button } from '../Button';
import { useRegisterSteps } from '../../hooks/useRegisterSteps';

interface IFormProps {
	name: string;
	specie: string;
	raca: string;
	sexo: string;
	age: string;
}

const schema = yup
	.object({
		name: yup.string().required(),
		specie: yup.string().required(),
		raca: yup.string().required(),
		sexo: yup.string().required(),
		age: yup.string().required(),
	})
	.required();

export function Step1({page, setPage}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		getValues,
		setValue,
	} = useForm<IFormProps>({
		// resolver: yupResolver(schema),
	});
	const { changeToNextStep } = useRegisterSteps();

	const onSubmit = async (data: IFormProps) => {
		console.log(data);
		changeToNextStep(data);
		setPage((prevPage) => (prevPage +1))
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
							<label htmlFor="name" className={`${errors?.name && 'error'}`}>
								Nome do animal *
							</label>
							<input
								type="text"
								id="name"
								className={`${errors?.name && 'inputError'}`}
								{...register('name')}
							/>

							{errors?.name && <span className="error">{errors.name.message}</span>}
						</div>
						<div className={styleLogin.inputContent}>
							<label htmlFor="raca" className={`${errors?.raca && 'error'}`}>
								Raça *
							</label>
							<input
								type="text"
								id="raca"
								className={`${errors?.raca && 'inputError'}`}
								{...register('raca')}
							/>

							{errors?.age && <span className="error">{errors.age.message}</span>}
						</div>
						<div className={styleLogin.inputContent}>
							<label htmlFor="age" className={`${errors?.age && 'error'}`}>
								Idade *
							</label>
							<input
								type="text"
								id="age"
								className={`${errors?.age && 'inputError'}`}
								{...register('age')}
							/>

							{errors?.age && <span className="error">{errors.age.message}</span>}
						</div>
					</div>

					<div className={styleRegister.gridRight}>
						<div className={styleLogin.inputContent}>
							<label htmlFor="specie" className={`${errors?.specie && 'error'}`}>
								Espécie *
							</label>
							<input
								type="text"
								id="specie"
								className={`${errors?.specie && 'inputError'}`}
								{...register('specie')}
							/>

							{errors?.specie && (
								<span className="error">{errors.specie.message}</span>
							)}
						</div>

						<div className={styleLogin.inputContent}>
							<label htmlFor="type" className={`${errors?.sexo && 'error'}`}>
								Sexo *
							</label>
							<select {...register('sexo')}>
								<option>Macho</option>
								<option>Femea</option>
							</select>

							{errors?.sexo && <span className="error">{errors.sexo.message}</span>}
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
