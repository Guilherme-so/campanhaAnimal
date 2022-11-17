import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styleLogin from '../../pages/style/login.module.scss';
import styleRegister from '../../pages/style/register.module.scss';
import { yup } from '../../utils/schema';
import { Button } from '../Button';

import { useRegisterSteps } from '../../hooks/useRegisterSteps';

const schema = yup
	.object({
		castrated: yup.string().required(),
		vaccinated: yup.string().required(),
		hasVermifugation: yup.string(),
		hasInjuries: yup.string().required(),
		injuries: yup.string(),
	})
	.required();

interface IAnimalProps {
	castrated: string;
	vaccinated: string;
	hasVermifugation: string;
	hasInjuries: string;
	injuries: string;
}

export function Step2({page, setPage}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		setValue,
		clearErrors,
	} = useForm<IAnimalProps>({
		// resolver: yupResolver(schema),
	});
	const { changeToNextStep } = useRegisterSteps();

	const onSubmit = async (data: IAnimalProps) => {
		changeToNextStep(data);
		setPage((prevPage) => (prevPage +1))
	};

	const [hasInjuries, setHasInjuries] = useState('');

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
							<label htmlFor="castrated" className={`${errors?.castrated && 'error'}`}>
								É castrado? *
							</label>
							<select {...register('castrated')}>
								<option>Sim</option>
								<option>Não</option>
							</select>

							{errors?.castrated && (
								<span className="error">{errors.castrated.message}</span>
							)}
						</div>
						<div className={styleLogin.inputContent}>
							<label
								htmlFor="hasVermifugation"
								className={`${errors?.hasVermifugation && 'error'}`}
							>
								Possui vermifugação? *
							</label>
							<select {...register('hasVermifugation')}>
								<option>Sim</option>
								<option>Não</option>
							</select>

							{errors?.hasVermifugation && (
								<span className="error">{errors.hasVermifugation.message}</span>
							)}
						</div>
						{hasInjuries === 'Sim' && (
							<div className={styleLogin.inputContent}>
								<label htmlFor="injuries" className={`${errors?.injuries && 'error'}`}>
									Qual deficiência? *
								</label>
								<input
									type="text"
									id="injuries"
									className={`${errors?.injuries && 'inputError'}`}
									{...register('injuries')}
								/>

								{errors?.hasVermifugation && (
									<span className="error">{errors.injuries.message}</span>
								)}
							</div>
						)}
					</div>

					<div className={styleRegister.gridRight}>
						<div className={styleLogin.inputContent}>
							<label
								htmlFor="vaccinated"
								className={`${errors?.vaccinated && 'error'}`}
							>
								É vacinado ? *
							</label>
							<select {...register('vaccinated')}>
								<option>Sim</option>
								<option>Não</option>
							</select>

							{errors?.vaccinated && (
								<span className="error">{errors.vaccinated.message}</span>
							)}
						</div>
						<div className={styleLogin.inputContent}>
							<label
								htmlFor="hasInjuries"
								className={`${errors?.hasInjuries && 'error'}`}
							>
								Possui deficiência? *
							</label>
							<select
								{...register('hasInjuries')}
								onChange={(e) => setHasInjuries(e.target.value)}
							>
								<option>Sim</option>
								<option>Não</option>
							</select>

							{errors?.hasInjuries && (
								<span className="error">{errors.hasInjuries.message}</span>
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
