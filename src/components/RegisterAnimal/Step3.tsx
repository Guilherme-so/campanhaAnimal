import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import { useRegisterSteps } from '../../hooks/useRegisterSteps';
import styleRegister from '../../pages/style/register.module.scss';
import styleLogin from '../../pages/style/login.module.scss';
import { yup } from '../../utils/schema';
import { Button } from '../Button';


interface IBlurProps {
	data: string;
}

interface IFormProps {
	state: string;
	city: string;
	observation: string;
}

const schema = yup
	.object({
		state: yup.string().min(6).max(36).required(),
		city: yup.string().required(),
		observation: yup.string(),
	})
	.required();

export function Step3({page ,setPage}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IFormProps>({
		// resolver: yupResolver(schema),
	});
	const [isLoading, setIsLoading] = useState(false);
	const { stepsData, changeToNextStep } = useRegisterSteps();
	const { setModalOpen } = useModal();

	const onSubmit = async (data: IFormProps) => {
		changeToNextStep(data);
		//  setIsLoading(true);
		console.log(data);
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
							<label htmlFor="state" className={`${errors?.state && 'error'}`}>
								Diga seu estado *
							</label>
							<select {...register('state')}>
								<option>São Paulo</option>
								<option>Rio de janeiro</option>
							</select>

							{errors?.state && <span className="error">{errors.state.message}</span>}
						</div>
					</div>

					<div className={styleRegister.gridRight}>
						<div className={styleLogin.inputContent}>
							<label htmlFor="city" className={`${errors?.city && 'error'}`}>
								E de qual cidade? *
							</label>
							<select {...register('city')}>
								<option>São paulo</option>
								<option>Morumbi</option>
							</select>

							{errors?.city && <span className="error">{errors.city.message}</span>}
						</div>
					</div>
				</div>
				<div className={styleLogin.textareaContainer}>
					<div className={styleLogin.inputContent}>
						<label htmlFor="city" className={`${errors?.observation && 'error'}`}>
							Observações? (Opcional) *
						</label>
						<textarea
							id="observation"
							name="observation"
							{...register('observation')}
						/>

						{errors?.observation && (
							<span className="error">{errors.observation.message}</span>
						)}
					</div>
				</div>
				<Button type="submit" isLoading={isLoading}>
					Próximo
				</Button>
			</form>
		</>
	);
}
