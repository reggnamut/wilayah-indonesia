import { Province, Regency, District, Village } from "../constant/interface";

export const vilPattern: Village = {
	id: 0,
	code: 0,
	name: "",
};

export const disPattern: District = {
	id: 0,
	code: 0,
	name: "",
	villages_total: 0,
	villages: [],
};

export const regPattern: Regency = {
	id: 0,
	code: 0,
	type: "",
	name: "",
	villages_total: 0,
	districts_total: 0,
	districts: [],
};

export const provPattern: Province = {
	id: 0,
	code: 0,
	name: "",
	regencies_total: 0,
	cities_total: 0,
	districts_total: 0,
	villages_total: 0,
	regencies: [],
};
