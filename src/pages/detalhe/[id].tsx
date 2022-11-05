import React from 'react';

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

export default function Detalhe({ event }) {
	console.log(event);
	return (
		<div>
			<div>Detalhe</div>
		</div>
	);
}
