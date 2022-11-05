import { SEO } from '../../SEO';
import { events } from '../../dummyData';

import style from "../style/events.module.scss";
import { useRouter } from 'next/router';


export default function Events() {
   const router = useRouter()


	return (
		<>
			<SEO
				title={'Eventos'}
				description="Confira os eventos disponíveis na plataforma."
			/>

			<div className={style.headerContainer}>
				<h1>Os melhores eventos</h1>
				<span>
					Confira os eventos que vão ocorrer nas Ongs <br /> Descubra eventos os
					eventos da sua cidade e colabore!
				</span>
			</div>
			<div className={style.mobileSearchContainer}>
				<button>
					<svg
						width="14"
						height="14"
						viewBox="0 0 19 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 16.2997H6M0 2.91211H4H0ZM18 2.91211H8H18ZM0 9.6059H12H0ZM18 9.6059H16H18ZM0 16.2997H2H0Z"
							stroke="#FF9D71"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M6 4.82504C7.10457 4.82504 8 3.96878 8 2.91252C8 1.85626 7.10457 1 6 1C4.89543 1 4 1.85626 4 2.91252C4 3.96878 4.89543 4.82504 6 4.82504Z"
							stroke="#FF9D71"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M14 11.5184C15.1046 11.5184 16 10.6622 16 9.6059C16 8.54963 15.1046 7.69336 14 7.69336C12.8954 7.69336 12 8.54963 12 9.6059C12 10.6622 12.8954 11.5184 14 11.5184Z"
							stroke="#FF9D71"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M4 18.2127C5.10457 18.2127 6 17.3564 6 16.3002C6 15.244 5.10457 14.3877 4 14.3877C2.89543 14.3877 2 15.244 2 16.3002C2 17.3564 2.89543 18.2127 4 18.2127Z"
							stroke="#FF9D71"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					Filtrar
				</button>
				<div className={style.mobileSearch}>
					<form>
						<input type="text" name="" id="" placeholder="buscar" />
					</form>
				</div>
			</div>

			<div className={style.mobileTitle}>
				<span>Campanhas no ar</span>
			</div>
			<section className={style.container}>
				<div className={style.searchContainer}>
					<form>
						<div className={style.search}>
							<input type="text" name="" id="" placeholder="Pesquisar por eventos" />
							<button>Buscar</button>
						</div>
						<div className={style.selects}>
							<select name="pets" id="pet-select">
								<option value="" disabled selected>
									Todos os tipos
								</option>
								<option value="1">Eventos para adoção</option>
								<option value="2">Feiras</option>
								<option value="3">Exposição</option>
								<option value="4">Palestras</option>
							</select>
							<select name="pets" id="pet-select">
								<option value="" disabled selected>
									{' '}
									Todos os estados
								</option>
								{/* <option value="dog">Dog</option>
								<option value="cat">Cat</option>
								<option value="hamster">Hamster</option>
								<option value="parrot">Parrot</option>
								<option value="spider">Spider</option>
								<option value="goldfish">Goldfish</option> */}
							</select>
							<select name="pets" id="pet-select">
								<option value="" disabled selected>
									Todas as datas
								</option>
								<option value="dog">Eventos da semana</option>
								<option value="cat">Eventos do mês</option>
								<option value="hamster">Eventos do próximo mês</option>
							</select>
						</div>
					</form>
				</div>



				<div className={style.cardContainer}>
					{events.map((event) => {
						return (
							<div className={style.card} key={event.id} onClick={() => router.push(`events/${event.slug}`)                        }> 
								<img src={event.thumbnail.url} alt={event.thumbnail.alt} />

								<div className={style.eventData}>
									<h1>{event.name}</h1>
									<div className={style.eventDataAndLocation}>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 19H5V8H19V19ZM16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1H16ZM17 12H12V17H17V12Z"
												fill="#FF9D71"
											/>
										</svg>
										<span>
											{event.schedule_date} as {event.event_hour}
										</span>
									</div>
									<div className={style.eventDataAndLocation}>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M18.2714 6C19.2814 8.17 19.0514 10.73 17.9414 12.81C17.0014 14.5 15.6514 15.93 14.5014 17.5C14.0014 18.2 13.5014 18.95 13.1314 19.76C13.0014 20.03 12.9114 20.31 12.8114 20.59C12.7114 20.87 12.6214 21.15 12.5314 21.43C12.4414 21.69 12.3314 22 12.0014 22C11.6114 22 11.5014 21.56 11.4214 21.26C11.1814 20.53 10.9414 19.83 10.5714 19.16C10.1514 18.37 9.62142 17.64 9.08142 16.93L18.2714 6ZM9.12142 8.42L5.82142 12.34C6.43142 13.63 7.34142 14.73 8.21142 15.83C8.42142 16.08 8.63142 16.34 8.83142 16.61L13.0014 11.67L12.9614 11.68C11.5014 12.18 9.88142 11.44 9.30142 10C9.22142 9.83 9.16142 9.63 9.12142 9.43C9.0664 9.09894 9.0664 8.76106 9.12142 8.43V8.42ZM6.58142 4.62L6.57142 4.63C4.95142 6.68 4.67142 9.53 5.64142 11.94L9.63142 7.2L9.58142 7.15L6.58142 4.62ZM14.2214 2.36L11.0014 6.17L11.0414 6.16C12.3814 5.7 13.8814 6.28 14.5614 7.5C14.7114 7.78 14.8314 8.08 14.8714 8.38C14.9314 8.76 14.9514 9.03 14.8814 9.4V9.41L18.0814 5.61C17.2449 4.08939 15.8726 2.93445 14.2314 2.37L14.2214 2.36ZM9.89142 6.89L13.8014 2.24L13.7614 2.23C13.1814 2.08 12.5914 2 12.0014 2C10.0314 2 8.17142 2.85 6.85142 4.31L6.83142 4.32L9.89142 6.89Z"
												fill="#FF9D71"
											/>
										</svg>
										{/* <span>
											Av. Jaceguava, <br />
											1699 - Casa Grande
										</span> */}
										<span>{event.adress}</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div id={style.seeMore}>
					Ver mais <img src="/assets/images/Vector.svg" />
				</div>
			</section>
		</>
	);
}
