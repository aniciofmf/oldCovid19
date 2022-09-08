export const travelers = {
	30373648: {
		dni: "30373648",
		firstName: "Maria Noel",
		lastName: "Leenen",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -34.591588,
			latitued: -58.434985,
			ref: "Santos Chocano 195, Lomas de Zamora",
		},
	},
	30463515: {
		dni: "30463515",
		firstName: "Juan Manuel",
		lastName: "Caneva",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -34.591588,
			latitued: -58.434985,
			ref: "Santos Chocano 195, Lomas de Zamora",
		},
	},
	29380573: {
		dni: "29380573",
		firstName: "Victoria",
		lastName: "Martinez Suarez",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -34.613112,
			latitued: -58.359883,
			ref: "Julieta Lanteri 1331",
		},
	},
	27550787: {
		dni: "27550787",
		firstName: "Pablo",
		lastName: "Simian",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -31.355755,
			latitued: -64.224521,
			ref: "Carlos Vega 4800",
		},
	},
	27246820: {
		dni: "27246820",
		firstName: "Natalia",
		lastName: "Martinez Suarez",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -31.355755,
			latitued: -64.224521,
			ref: "Carlos Vega 4800",
		},
	},
	12001402: {
		dni: "12001402",
		firstName: "Nuncia Maria",
		lastName: "Fiorenza",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -34.591588,
			latitued: -58.434985,
			ref: "Santos Chocano 195, Lomas de Zamora",
		},
	},
	10709267: {
		dni: "10709267",
		firstName: "Enrique Leonardo",
		lastName: "Leenen",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			longitude: -34.591588,
			latitued: -58.434985,
			ref: "Santos Chocano 195, Lomas de Zamora",
		},
	},
	26975121: {
		dni: "26975121",
		firstName: "Julian Eduardo",
		lastName: "Escalada",
		phoneNumber: "005491131223555",
		quarantineAddress: {
			latitude: -69.270927,
			longitude: -51.606392,
			ref: "Alferez Sánchez",
		},
	},
};

export const getTraveler = (id: string): Promise<Traveler> =>
	new Promise((res, rej) => {
		res(travelers[id]);
	});
