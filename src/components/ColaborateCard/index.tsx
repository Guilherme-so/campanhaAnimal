import style from './styles.module.scss';

interface CardData {
	imgUrl: string;
	titular?: string;
	ag?: string;
	account?: string;
	cnpj?: string;
	link?: string;
}

export function ColaborateCard({
	imgUrl,
	titular,
	ag,
	account,
	cnpj,
	link,
}: CardData) {
	return (
		<>
			{link ? (
				<a href={link} target="_blank">
					<div className={style.container}>
						<img src={imgUrl} alt="logo banking" />
					</div>
				</a>
			) : (
				<div className={style.container}>
					<img src={imgUrl} alt="" />
					<div className={style.contentContainer}>
						<div className={style.content}>
							<h3>Titular:</h3> <span>{titular}</span>
						</div>

						{ag && (
							<div className={style.content}>
								<h3>Ag:</h3> <span>{ag}</span>
							</div>
						)}
						{account && (
							<div className={style.content}>
								<h3>Conta Corrente:</h3> <span>{account}</span>
							</div>
						)}
						{cnpj && (
							<div className={style.content}>
								<h3>Cnpj:</h3> <span>{cnpj}</span>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
