import { SEO } from '../SEO';
import { ColaborateCard } from '../components/ColaborateCard';

import style from './style/colaborate.module.scss';


export default function Colaborate() {
	return (
		<>
			<SEO
				title="Colabore"
				description="Criada por uma equipe 100% voluntária
				para ajudar animais de todas as espécies
				pelo Brasil"
			/>

			<section className={style.bannerContainer}>
				<div className={style.bannerContent}>
					<p>
						O Santuário das Fadas é um local que resgata e acolhe, principalmente
						animais de fazenda vítimas de maus tratos, negligência e abuso. No
						Santuário esses animais chegam muitas vezes debilitados e sem dignidade
						nenhuma. Aqui além de tratarmos o físico também tratamos o emocional dos
						mesmos, trazendo de volta a autoestima desses animais e a confiança nos
						seres humanos.
					</p>
				</div>
				{/* <img src="/assets/images/colaborate-header-img.png" alt="" /> */}
			</section>
			<main className={style.container}>
				<h1>Colabore conosco</h1>

				<div className={style.cardContainer}>
					<ColaborateCard
						imgUrl="/assets/images/logo-pix.png"
						titular="Campanha animal"
						cnpj="16.724.958/0001-65"
					/>
					<ColaborateCard
						imgUrl="/assets/images/itau-logo.png"
						titular="Associação Santuário das Fadas"
						cnpj="16.724.958/0001-65"
						ag="0488"
						account="06365-2"
					/>
					{/* <ColaborateCard
						imgUrl="/assets/images/banco-do-brasil-logo.png"
						titular="Campanha animal"
						ag="2683"
						account="1282856-4"
					/>
					<ColaborateCard
						imgUrl="/assets/images/bradesco-logo.png"
						titular="Campanha animal"
						ag="0726"
						account="1207634-7"
					/> */}
					<ColaborateCard
						imgUrl="/assets/images/picpay-logo.png"
						titular="@santuario.fadas"
					/>
					<ColaborateCard
						imgUrl="/assets/images/PayPal-Logo.png"
						link="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UZC72ANSDN7E2"
					/>
					<ColaborateCard
						imgUrl="/assets/images/Logo_PagSeguro.png"
						link="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=ac33ec549e33268d78cd919a5e8350bdf42e9517b33b39eec7042d59cf4bb709&e=true#rmcl"
					/>

					<ColaborateCard
						imgUrl="/assets/images/apoiaselogo.png"
						link="https://www.apoia.se/santuariodasfadas"
					/>
				</div>
			</main>
		</>
	);
}
