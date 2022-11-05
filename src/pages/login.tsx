import { useRouter } from 'next/router';
import { SEO } from '../SEO';
import { useAuth } from '../hooks/useAuth';
import tryLogin from './api/login';
import { useForm } from 'react-hook-form';

import { Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { yup } from '../utils/schema';
import { yupResolver } from '@hookform/resolvers/yup';

import style from './style/login.module.scss';

interface IFormProps {
	email: string;
	password: string;
}

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	})
	.required();

	
export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IFormProps>({
		// resolver: yupResolver(schema),
	});
	const Router = useRouter();
	const { isAuthenticated, signInUser } = useAuth();

	if (isAuthenticated) {
		Router.replace('/');
	}

	const onSubmit = async (data: IFormProps) => {
		const { email, password } = data;
		const request = tryLogin({ email, password });

		request
			.then((response: any) => {
				if (response?.status !== 200) {
					const { message } = response?.data;
					if (message) {
						setError('email', {
							type: 'invalid',
							message,
						});
					}
					return;
				}
				const { access_token } = response.data;
				signInUser(access_token);
			})
			.catch((err) => {
				const { message } = err || 'Ocorreu um erro no servidor.';
				if (message) {
					setError('email', {
						type: 'invalid',
						message,
					});
				}
			});
	};

	return (
		<>
			<SEO title={'Login'} description="Logue-se na plataforma campanha animal." />

			<Hero>
				<div className={style.box}>
					<h3>Login</h3>

					<form className={style.boxContent} onSubmit={handleSubmit(onSubmit)}>
						<div className={style.inputContent}>
							<label htmlFor="email" className={`${errors?.email && 'error'}`}>
								E-mail *
							</label>
							<input
								type="email"
								id="email"
								className={`${errors?.email && 'inputError'}`}
								{...register('email')}
							/>
						</div>

						<div className={style.inputContent}>
							<label htmlFor="password" className={`${errors?.password && 'error'}`}>
								Senha *
							</label>
							<input
								type="password"
								id="password"
								className={`${errors?.password && 'inputError'}`}
								{...register('password')}
							/>
						</div>

						{errors?.email && <span className="error">{errors.email.message}</span>}
						{errors?.password && (
							<span className="error">{errors.password.message}</span>
						)}

						<div className="separator"></div>
						<Button type="submit">Entrar</Button>
						<a href="/registro">Cadastre-se</a>
					</form>
				</div>
			</Hero>
		</>
	);
}
