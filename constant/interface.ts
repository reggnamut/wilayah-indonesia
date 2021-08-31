export interface Villages {
	id: number;
	code: number;
	name: string;
}

export interface District {
	id: number;
	code: number;
	name: string;
	villages_total: number;
	villages: Villages[];
}

export interface Regency {
	id: number;
	code: number;
	type: string;
	name: string;
	districts_total: number;
	districts: District[];
}

export interface Province {
	id: number;
	code: number;
	name: string;
	regencies_total: number;
	citites_total: number;
	districts_total: number;
	regencies: Regency[];
}
