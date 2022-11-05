export const dogs = [
	{
		title: 'Ajude na cirurgia de Akira',
		description:
			'Akira está precisando de fazer uma cirurgia no olho, nós ajude para a akira conseguir fazer sua cirurgia.',
		image: 'https://wallpaperaccess.com/full/769133.jpg',
	},
	{
		title: 'Ajude na cirurgia de Akira',
		description:
			'Akira está precisando de fazer uma cirurgia no olho, nós ajude para a akira conseguir fazer sua cirurgia.',
		image: 'https://images5.alphacoders.com/466/thumb-1920-466168.jpg',
	},
	{
		title: 'Ajude na cirurgia de Akira',
		description:
			'Akira está precisando de fazer uma cirurgia no olho, nós ajude para a akira conseguir fazer sua cirurgia.',
		image: 'https://images5.alphacoders.com/667/thumb-1920-667685.jpg',
	},
];

interface AnimalsData {
	name: string;
	type: 'dog' | 'cat' | 'goat' | 'horse' | 'rabit';
	sex: 'male' | 'female';
	size: 'p' | 'm' | 'g';
	age: string;
	disabilities?: string;
	isHereSince: string;
	breed?: string;
}

export const animals: AnimalsData[] = [
	{
		name: 'Mureta',
		type: 'dog',

		sex: 'male',
		size: 'm',
		age: '7',
		isHereSince: 'Janeiro/2019',
	},
	{
		name: 'Jurema',
		type: 'horse',
		sex: 'female',
		size: 'g',
		age: '10',
		isHereSince: 'Julho/2019',
	},
	{
		name: 'Puma',
		type: 'cat',
		sex: 'male',
		size: 'p',
		age: '11',
		isHereSince: 'Maio/2018',
	},
	{
		name: 'Jafar',
		type: 'goat',
		sex: 'male',
		size: 'g',
		age: '6',
		isHereSince: 'Novembro/2019',
	},
	{
		name: 'Cascavel',
		type: 'horse',
		sex: 'male',
		size: 'g',
		age: '16',
		isHereSince: 'Agosto/2017',
	},
	{
		name: 'Chuchu',
		type: 'cat',
		sex: 'female',
		size: 'p',
		age: '2',
		isHereSince: 'Agosto/2021',
	},
	{
		name: 'Neném',
		type: 'dog',
		sex: 'male',
		size: 'm',
		age: '1',
		isHereSince: 'Outubro/2021',
	},
	{
		name: 'Aladin',
		type: 'goat',
		sex: 'male',
		size: 'g',
		age: '6',
		isHereSince: 'Novembro/2019',
	},
];
