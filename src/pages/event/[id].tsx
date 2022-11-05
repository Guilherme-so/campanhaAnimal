import { GetServerSideProps } from 'next';
import { SEO } from '../../SEO';
import { api } from '../../services/axios';
import style from './styles.module.scss';

interface EventProps {
	id: number;
	name: string;
	schedule_date: string;
	thumbnail: {
		url: string;
		alt: string;
	};
	image: {
		url: string;
		alt: string;
	};
	event_hour: string;
	adress: string;
}

interface DataProps {
	event: EventProps;
}

export default function Event({ event }: DataProps) {
	return (
		<>
			<SEO title={`t`} description="Página de descrição de um evento." />
			<section className={style.subMenu}>
				<svg
					width="25"
					height="17"
					viewBox="0 0 25 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.66798 9.47315L12.4963 2.31646C12.4975 2.31642 12.4988 2.31641 12.5 2.31641C12.5012 2.31641 12.5025 2.31642 12.5037 2.31646L23.332 9.47315C23.4294 9.53748 23.4785 9.59058 23.5 9.61832V14.7649C23.4404 14.7782 23.3663 14.7881 23.2784 14.7881H17.0398C16.9619 14.7881 16.8954 14.7802 16.8409 14.7691V11.7855C16.8409 10.6031 16.1156 9.7222 15.3356 9.20664C14.5435 8.68314 13.5366 8.40788 12.5 8.40788C11.4634 8.40788 10.4565 8.68314 9.66441 9.20664C8.88435 9.7222 8.15909 10.6031 8.15909 11.7855V14.7691C8.10455 14.7802 8.0381 14.7881 7.96023 14.7881H1.72159C1.63371 14.7881 1.55959 14.7782 1.5 14.7649V9.61832C1.52146 9.59058 1.57064 9.53748 1.66798 9.47315Z"
						stroke="#FF9D71"
						strokeWidth="3"
					/>
				</svg>
				<svg
					width="10"
					height="16"
					viewBox="0 0 10 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.738281 13.725L6.46328 8L0.738281 2.2625L2.50078 0.5L10.0008 8L2.50078 15.5L0.738281 13.725Z"
						fill="#FF9D71"
					/>
				</svg>
				<a href="/">Eventos</a>
				<svg
					width="10"
					height="16"
					viewBox="0 0 10 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.738281 13.725L6.46328 8L0.738281 2.2625L2.50078 0.5L10.0008 8L2.50078 15.5L0.738281 13.725Z"
						fill="#FF9D71"
					/>
				</svg>
				<a href="#">ss</a>
			</section>

			<section className={style.container}>
				<div
					style={{
						width: '100%',
						display: 'flex',
						position: 'relative',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<div
						style={{
							width: '100%',
							height: '568px',
							background: `url(${event.image.url})`,
							backgroundPosition: 'center',
							backgroundRepeat: 'repeat',
							objectFit: 'contain',
							filter: 'blur(20px)',
							display: 'flex',
							zIndex: -1,
						}}
					/>
					<img
						style={{
							display: 'flex',
							position: 'absolute',
							bottom: '25px',

							width: '100%',
							maxWidth: '1000px',
						}}
						src={event.image.url}
						alt=""
					/>
				</div>

				<div className={style.addressContainer}>
					<div className={style.adress}>
						<div>
							<h1>1° Feira vegana</h1>
						</div>
						<div className={style.addressData}>
							<div className={style.data}>
								<svg
									width="30"
									height="30"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M38.0638 12.4993C40.168 17.0202 39.6888 22.3535 37.3763 26.6869C35.418 30.2077 32.6055 33.1869 30.2097 36.4577C29.168 37.916 28.1263 39.4785 27.3555 41.166C27.0847 41.7285 26.8972 42.3119 26.6888 42.8952C26.4805 43.4785 26.293 44.0619 26.1055 44.6452C25.918 45.1869 25.6888 45.8327 25.0013 45.8327C24.1888 45.8327 23.9597 44.916 23.793 44.291C23.293 42.7702 22.793 41.3119 22.0222 39.916C21.1472 38.2702 20.043 36.7494 18.918 35.2702L38.0638 12.4993ZM19.0013 17.541L12.1263 25.7077C13.3972 28.3952 15.293 30.6869 17.1055 32.9785C17.543 33.4994 17.9805 34.041 18.3972 34.6035L27.0847 24.3119L27.0013 24.3327C23.9597 25.3744 20.5847 23.8327 19.3763 20.8327C19.2097 20.4785 19.0847 20.0619 19.0013 19.6452C18.8867 18.9555 18.8867 18.2516 19.0013 17.5619V17.541ZM13.7097 9.62435L13.6888 9.64518C10.3138 13.916 9.7305 19.8535 11.7513 24.8743L20.0638 14.9993L19.9597 14.8952L13.7097 9.62435ZM29.6263 4.91602L22.918 12.8535L23.0013 12.8327C25.793 11.8743 28.918 13.0827 30.3347 15.6243C30.6472 16.2077 30.8972 16.8327 30.9805 17.4577C31.1055 18.2494 31.1472 18.8118 31.0013 19.5827V19.6035L37.668 11.6868C35.9253 8.51891 33.0662 6.11278 29.6472 4.93685L29.6263 4.91602ZM20.6055 14.3535L28.7513 4.66602L28.668 4.64518C27.4597 4.33268 26.2305 4.16602 25.0013 4.16602C20.8972 4.16602 17.0222 5.93685 14.2722 8.97852L14.2305 8.99935L20.6055 14.3535Z"
										fill="#FF9D71"
									/>
								</svg>

								<span>Centuario das fadas</span>
							</div>
							<div className={style.data}>
								<svg
									width="30"
									height="30"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M39.5833 39.584H10.4167V16.6673H39.5833V39.584ZM33.3333 2.08398V6.25065H16.6667V2.08398H12.5V6.25065H10.4167C8.10417 6.25065 6.25 8.10482 6.25 10.4173V39.584C6.25 40.6891 6.68899 41.7489 7.47039 42.5303C8.25179 43.3117 9.3116 43.7507 10.4167 43.7507H39.5833C40.6884 43.7507 41.7482 43.3117 42.5296 42.5303C43.311 41.7489 43.75 40.6891 43.75 39.584V10.4173C43.75 9.31225 43.311 8.25244 42.5296 7.47104C41.7482 6.68964 40.6884 6.25065 39.5833 6.25065H37.5V2.08398H33.3333ZM35.4167 25.0007H25V35.4173H35.4167V25.0007Z"
										fill="#FF9D71"
									/>
								</svg>
								<span>31/12/2021 as 18hrs</span>
							</div>

							<div className={style.buttonContainer}>
								<a href="#">Localização</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export const getStaticPaths = async () => {
	const data = [
		{
			id: '1',
			name: 'Evento de adoção',
			schedule_date: '28/12/2021',
			thumbnail: {
				url: '/assets/images/event-1.png',
				alt: 'Imagem de teste',
			},
			image: {
				url: '/assets/images/img-event-detail.png',
				alt: 'Imagem de teste',
			},

			event_hour: '14hrs',
			adress: 'Av. Jaceguava, 1699',
		},
	];

	const paths = data.map((data) => {
		return {
			params: { id: data.id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const data = {
		id: 1,
		name: 'Evento de adoção',
		schedule_date: '28/12/2021',
		thumbnail: {
			url: '/assets/images/event-1.png',
			alt: 'Imagem de teste',
		},
		image: {
			url: '/assets/images/img-event-detail.png',
			alt: 'Imagem de teste',
		},

		event_hour: '14hrs',
		adress: 'Av. Jaceguava, 1699',
	};

	return {
		props: { event: data },
	};
};
