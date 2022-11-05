import { useEffect, useRef, useState } from 'react';
import { api } from '../../services/axios';
import style from './styles.module.scss';
import { v4 as uuid } from 'uuid';

interface IAdoptionResponse {
	title: string;
	description: string;
	image: string;
}

export function AdoptionSlider({ animals }) {
	const containerRef = useRef<HTMLDivElement>();
	const limitPerPage = 3;
	const [adoptions, setAdoptions] = useState<IAdoptionResponse[]>([]);
	const [windowSize, setWindowSize] = useState(0);

	const arrowsIsDisabled = (): boolean => {
		return windowSize <= 1020
			? adoptions.length < 1
			: adoptions.length <= limitPerPage;
	};

	useEffect(() => {
		setWindowSize(window.innerWidth);
		api.get('/dogs').then((response) => {
			setAdoptions(response.data);
		});
	}, []);


	return (
		<>
			<section ref={containerRef} className={style.adoptionContainer}>
				<div className={style.title}>
					<h1>Veja também: </h1>
				</div>

				<div id={style.arrowLeft} className={style.arrow}>
					<img
						className={`${arrowsIsDisabled() ? 'disabledImage' : ''}`}
						src="/assets/images/mdi_chevron-left-circle-outline (1).png"
						alt="Ícone seta para esquerda"
					/>
				</div>
				<div key={uuid()} className={style.adoptionContent}>
					{animals.map((animal, i) => {
						return (
							<div
								key={uuid()}
								className={`${style.adoption} ${i == 1 && 'activeSlider'}`}
							>
								<div className={style.card} key={animal.name}>
									<img src="/assets/images/mureta.png" alt="" />
									<div className={style.cardAnimalInfo}>
										<img src="/assets/images/user.png" alt="" />
										<span>Toca das fadas</span>
									</div>
									<div className={style.cardContent}>
										<h1>
											Adote {animal.sex === 'female' ? 'a' : 'o'} {animal.name}
										</h1>
										<span>{animal.sex === 'female' ? 'Fêmea' : 'Macho'}</span>
										<span>{animal.age} anos de idade</span>
										{animal.disabilities && <span>{animal.disabilities}</span>}

										<span>no abrigo desde:</span>
										<span>{animal.isHereSince}</span>
										<button type="button">Sobre mim</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div id={style.arrowRight} className={style.arrow}>
					<img
						className={`${arrowsIsDisabled() ? 'disabledImage' : ''}`}
						src="/assets/images/mdi_chevron-left-circle-outline.png"
						alt="Ícone seta para direta"
					/>
				</div>
			</section>
		</>
	);
}
