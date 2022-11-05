import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import { SEO } from '../SEO';
import { Hero } from '../components/Hero';
import Form from '../components/RegForm';


 const Register =() => {
	const { isAuthenticated } = useAuth();

	const Router = useRouter();

	if (isAuthenticated) {
		Router.replace('/');
	}

	return (
		<>
			<SEO
				title={'Registro'}
				description="Desenvolvida pela equipe da ONG santuário das fadas, A Plataforma campanha animal conta com o empenho de um time voluntários dedicados á causa animal que oferecem seu tempo e talento a essa iniciativa para ajudar animais de todas as espécies pelo Brasil."
			/>
			<Hero>
				<Form />
			</Hero>
		</>
	);
}


export default Register