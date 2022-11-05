export const events = [
  {
    id: 1,
    name: "Evento de adoção",
    slug: "Evento_de_adoção",
    schedule_date: "28/12/2021",
    thumbnail: {
      url: "/assets/images/event-1.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },

    event_hour: "14hrs",
    adress: "Av. Jaceguava, 1699",
  },
  {
    id: 2,
    name: "1° Feira de adoção",
    slug: "1°_Feira_de_adoção",
    schedule_date: "31/12/2021",
    thumbnail: {
      url: "/assets/images/event-2.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Fazenda Valle das Fadas",
  },
  {
    id: 3,
    name: "1° Feira vegana",
    slug: "1°_Feira_vegana",
    schedule_date: "31/12/2021",
    thumbnail: {
      url: "/assets/images/event-3.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Santuário das fadas",
  },
  {
    id: 4,
    name: "Evento de adoção edição 2",
    slug: "Evento_de_adoção_edição_2",
    schedule_date: "28/12/2021",
    thumbnail: {
      url: "/assets/images/event-1.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Av. Jaceguava, 1699",
  },
  {
    id: 5,
    name: "2° Feira de adoção",
    slug: "2°_Feira_de_adoção",
    schedule_date: "28/12/2021",
    thumbnail: {
      url: "/assets/images/event-2.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Av. Jaceguava, 1699",
  },
  {
    id: 6,
    name: "2° Feira vegana",
    slug: "2°_Feira_vegana",
    schedule_date: "28/12/2021",
    thumbnail: {
      url: "/assets/images/event-3.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Av. Jaceguava, 1699",
  },
  {
    id: 7,
    name: "Evento de adoção edição 2",
    slug: "Evento_de_adoção_edição_2",
    schedule_date: "28/12/2021",
    thumbnail: {
      url: "/assets/images/event-1.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Av. Jaceguava, 1699",
  },
  {
    id: 8,
    name: "3° Feira de adoção",
    slug: "3°_Feira_de_adoção",
    schedule_date: "28/12/2021",
    thumbnail: {
      url: "/assets/images/event-2.png",
      alt: "Imagem de teste",
    },
    image: {
      url: "/assets/images/img-event-detail.png",
      alt: "Imagem de teste",
    },
    event_hour: "18hrs",
    adress: "Av. Jaceguava, 1699",
  },
];

interface adoteAnimaisData {
	name: string;
	type: 'dog' | 'cat' | 'goat' | 'horse' | 'rabit';
	sex: 'male' | 'female';
	size: 'p' | 'm' | 'g';
	age: string;
	disabilities?: string;
	isHereSince: string;
	breed?: string;
  thumbnail?: {url: string, alt: string};
}

export const AdoteAnimals: adoteAnimaisData[] = [
	{
		name: 'Mureta',
		type: 'dog',

		sex: 'male',
		size: 'm',
		age: '7',
		isHereSince: 'Janeiro/2019',
    thumbnail: {
      url: "/assets/images/mureta.png",
      alt: "Mureta",
    },    
	},
	{
		name: 'Jurema',
		type: 'horse',
		sex: 'female',
		size: 'g',
		age: '10',
		isHereSince: 'Julho/2019',
    thumbnail: {
      url: "/assets/images/jurema.png",
      alt: "Mureta",
    },  
	},
	{
		name: 'Puma',
		type: 'cat',
		sex: 'male',
		size: 'p',
		age: '11',
		isHereSince: 'Maio/2018',
    thumbnail: {
      url: "/assets/images/puma.png",
      alt: "Mureta",
    },  
	},
	{
		name: 'Jafar',
		type: 'goat',
		sex: 'male',
		size: 'g',
		age: '6',
		isHereSince: 'Novembro/2019',
    thumbnail: {
      url: "/assets/images/jafar.png",
      alt: "Mureta",
    },  
	},
	{
		name: 'Cascavel',
		type: 'horse',
		sex: 'male',
		size: 'g',
		age: '16',
		isHereSince: 'Agosto/2017',
    thumbnail: {
      url: "/assets/images/cascavel.png",
      alt: "Mureta",
    },  
	},
	{
		name: 'Chuchu',
		type: 'cat',
		sex: 'female',
		size: 'p',
		age: '2',
		isHereSince: 'Agosto/2021',
    thumbnail: {
      url: "/assets/images/chuchu.png",
      alt: "Mureta",
    },  
	},
	{
		name: 'Neném',
		type: 'dog',
		sex: 'male',
		size: 'm',
		age: '1',
		isHereSince: 'Outubro/2021',
    thumbnail: {
      url: "/assets/images/nenem.png",
      alt: "Mureta",
    },  
	},
	{
		name: 'Aladin',
		type: 'goat',
		sex: 'male',
		size: 'g',
		age: '6',
		isHereSince: 'Novembro/2019',
    thumbnail: {
      url: "/assets/images/aladin.png",
      alt: "Mureta",
    },  
	},
];

interface AnimalsData {
  id: string;
  nome: string;
  slug: string
  type: "dog" | "cat" | "goat" | "horse" | "rabit";
  genero: "macho" | "femea";
  idade: string;
  // disabilities?: string;
  isHereSince: string;
  breed?: string;
  custos: string;
  thumbnail?: {url: string, alt: string};
  images?: any;
}

export const apadrinheAnimais: AnimalsData[] = [
  {
    id: "1",
    nome: "Padoca",
    slug: "padoca",
    type: "dog",
    genero: "macho",
    idade: "7",
    isHereSince: "Dezembro/2020",
    custos: "545,00",
    thumbnail: {
      url: "/assets/images/padoca.png",
      alt: "padoca",
    },
  },
  {
    id: "2",
    nome: "Rubi",
    slug: "rubi",
    type: "horse",
    genero: "femea",
    idade: "10",
    isHereSince: "Agosto/2018",
    custos: "935,00",
    thumbnail: {
      url: "/assets/images/rubi.png",
      alt: "rubi",
    },
  },
  {
    id: "3",
    nome: "Kika",
    slug: "kika",
    type: "dog",
    genero: "femea",
    idade: "11",
    isHereSince: "Fevereiro/2016",
    custos: "656,70",
    thumbnail: {
      url: "/assets/images/kika.png",
      alt: "kika",
    },
  },
  {
    id: "4",
    nome: "Bita",
    slug: "bita",
    type: "goat",
    genero: "femea",
    idade: "6",
    isHereSince: "Novembro/2019",
    custos: "460,85",
    thumbnail: {
      url: "/assets/images/bita.png",
      alt: "bita",
    },
  },
  {
    id: "5",
    nome: "Isabel",
    slug: "isabel",
    type: "horse",
    genero: "femea",
    idade: "16",
    isHereSince: "Abril/2017",
    custos: "1682,00",
    thumbnail: {
      url: "/assets/images/isabel.png",
      alt: "isabel",
    },
  },
  {
    id: "6",
    nome: "Buzina",
    slug: "buzina",
    type: "dog",
    genero: "femea",
    idade: "2",
    isHereSince: "Dezembro/2021",
    custos: "536,70",
    thumbnail: {
      url: "/assets/images/buzina.png",
      alt: "buzina",
    },
    images: [
      { url: "/assets/images/buzina1.png", alt: "buzina1" },
      { url: "/assets/images/buzina2.png", alt: "buzina2" },
      { url: "/assets/images/buzina3.png", alt: "buzina3" },
      { url: "/assets/images/buzina4.png", alt: "buzina4" },
      { url: "/assets/images/buzina5.png", alt: "buzina5" },
    ],
  },
  {
    id: "7",
    nome: "Rex",
    slug: "rex",
    type: "dog",
    genero: "macho",
    idade: "1",
    isHereSince: "Outubro/2021",
    custos: "576,70",
    thumbnail: {
        url: "/assets/images/rex.png",
        alt: "rex",
      },
  },
  {
    id: "8",
    nome: "Jade",
    slug: "jade",
    type: "goat",
    genero: "femea",
    idade: "6",
    isHereSince: "Novembro/2019",
    custos: "460,85",
    thumbnail: {
        url: "/assets/images/jade.png",
        alt: "jade",
      },
  },
  {
    id: "9",
    nome: "vivi",
    slug: "vivi",
    type: "rabit",
    genero: "femea",
    idade: "6",
    isHereSince: "Novembro/2019",
    custos: "650,00",
    thumbnail: {
        url: "/assets/images/vivi.png",
        alt: "vivi",
      },
  },
];


	export const fakeCampaigns = [
    {
      id: 1,
      name: "Ajude a muriçoca",
      slug: "Ajude-a-muriçoca",
      donationId: '123548',
      Arrecadado: '8.000,00',
      progress: 55,
      meta: "15.000.00",
      thumbnail: {
        url: "/assets/images/muricoca.png",
        alt: "muriçoca"
      }
    },
    {
      id: 2,
      name: "Ajude a pipoca",
      slug: "Ajude-a-pipoca",
      donationId: '123548',
      Arrecadado: '6.000,00',
      progress: 67,
      meta: "8.000.00",
      thumbnail: {
        url: "/assets/images/pipoca.png",
        alt: "pipoca"
      }
    },
    {
      id: 3,
      name: "Ajude com rémedios",
      slug: "Ajude-com-rémedios",
      donationId: '123548',
      Arrecadado: '3.000,00',
      progress: 43,
      meta: "7.000.00",
      thumbnail: {
        url: "/assets/images/remdios2.png",
        alt: "remedios2"
      }
    },
    {
      id: 4,
      name: "Ajude a bombom",
      slug: "Ajude-a-bombom",
      donationId: '123548',
      Arrecadado: '3.000,00',
      progress: 20,
      meta: "15.000.00",
      thumbnail: {
        url: "/assets/images/bombom.png",
        alt: "bombom"
      }
    },
    {
      id: 5,
      name: "Ajude o Romeu com cirurgia",
      slug: "Ajude-o-Romeu-com-cirurgia",
      donationId: '123548',
      Arrecadado: '5.000,00',
      progress: 50,
      meta: "10.000.00",
      thumbnail: {
        url: "/assets/images/romeu.png",
        alt: "romeu"
      }
    },
    {
      id: 6,
      name: "Nós ajude com rémedios",
      slug: "Nós-ajude-com-rémedios",
      donationId: '56875',
      Arrecadado: '8.000,00',
      progress: 40,
      meta: "20.000.00",
      thumbnail: {
        url: "/assets/images/remedios.png",
        alt: "remedios"
      }
    },
    {
      id: 7,
      name: "Ajude a Lola",
      slug: "Ajude-a-Lola",
      donationId: '78954',
      Arrecadado: '2.000,00',
      progress: 40,
      meta: "5.000.00",
      thumbnail: {
        url: "/assets/images/lola.png",
        alt: "lola"
      }
    },
    {
      id: 8,
      name: "Ajude nossa ONG",
      slug: "Ajude-nossa-ONG",
      donationId: '65489',
      Arrecadado: '6.000,00',
      progress: 80,
      meta: "8.000.00",
      thumbnail: {
        url: "/assets/images/ong2.png",
        alt: "ong2"
      }
    },
    {
      id: 9,
      name: "Ajuda com kit de limpeza",
      slug: "Ajuda-com-kit-de-limpeza",
      donationId: '87598',
      Arrecadado: '3.000,00',
      progress: 75,
      meta: "5.000.00",
      thumbnail: {
        url: "/assets/images/kit-de-limpeza.png",
        alt: "kit de limpeza"
      }
    },
   
  ]