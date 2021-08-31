import { delay, duplicate } from "../util";
import { getProvinces, getRegencies, getDistricts, getVillages } from "./api";
import { red, yellow, magenta, blue, bold } from "colors/safe";

interface Response {
	kode: string;
	name: string;
}

function type(color: string, str: string): string {
	let txt = str;
	switch (color) {
		case "red":
			txt = red(str);
			break;
		case "yellow":
			txt = yellow(str);
			break;
		case "magenta":
			txt = magenta(str);
			break;
		case "blue":
			txt = blue(str);
			break;
	}

	return bold(txt);
}

(async function () {
	const provinces = await getProvinces();

	for (const [i, province] of provinces.entries()) {
		console.debug(type("red", "PROVINSI"), i, province.kode_dagri, province.nama_dagri);
		const regencies = await getRegencies(province.kode_bps);

		if (!duplicate(i, provinces, province)) process.exit(0);
		
		for (const [j, regency] of regencies.entries()) {
			console.debug(type("yellow", "KABUPATEN"), j, regency.kode_dagri, regency.nama_dagri);
			const districts = await getDistricts(regency.kode_bps);

			if (!duplicate(j, regencies, regency)) process.exit(0);

			for (const [k, district] of districts.entries()) {
				console.debug(type("blue", "KECAMATAN"), k, district.kode_dagri, district.nama_dagri);
				const villages = await getVillages(district.kode_bps);

				if (!duplicate(k, districts, district)) process.exit(0);

				for (const [l, village] of villages.entries()) {
					console.debug(type("magenta", "DESA"), l, village.kode_bps, village.nama_dagri);

					if (!duplicate(l, villages, village)) process.exit(0);

					await delay(10);
				}

				// await delay(250);
			}

			// await delay(250);
		}

		// await delay(250);
	}
})();
