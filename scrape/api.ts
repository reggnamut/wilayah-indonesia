import Axios, { AxiosResponse } from "axios";
import { API_URL, PERIOD } from "../constant/variables";

export async function getProvinces() {
	const query: string = "/level/provinsi/parent/0";
	const { data }: AxiosResponse = await Axios.get(API_URL + query + PERIOD);
	return data;
}

export async function getRegencies(provinceCode: string) {
	const query: string = `/level/kabupaten/parent/${provinceCode}`;
	const { data }: AxiosResponse = await Axios.get(API_URL + query + PERIOD);
	return data;
}

export async function getDistricts(regencyCode: string) {
	const query: string = `/level/kecamatan/parent/${regencyCode}`;
	const { data }: AxiosResponse = await Axios.get(API_URL + query + PERIOD);
	return data;
}

export async function getVillages(districtCode: string) {
	const query: string = `/level/desa/parent/${districtCode}`;
	const { data }: AxiosResponse = await Axios.get(API_URL + query + PERIOD);
	return data;
}
