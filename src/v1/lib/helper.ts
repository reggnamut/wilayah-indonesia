export const countTotal = (data: Array<any>) => {
  return data.length;
};

export const getProvinceMetadata = (province: any) => {
  const provinceTotalRegencies: number = getProvinceTotalRegencies(province);
  const provinceTotalDistricts: number = getProvinceTotalDistricts(province);
  const provinceTotalVillages: number = getProvinceTotalVillages(province);
  return { total_kabupaten: provinceTotalRegencies, total_kecamatan: provinceTotalDistricts, total_desa: provinceTotalVillages };
};

export const getRegencyMetadata = (regency: any) => {
  const regencyTotalDistricts: number = getRegencyTotalDistricts(regency);
  const regencyTotalVillages: number = getRegencyTotalVillages(regency);
  return { total_kecamatan: regencyTotalDistricts, total_desa: regencyTotalVillages };
};

export function getProvinceTotalRegencies(province: any): number {
  if (!province?.data_kabupaten) return 0;
  const provinceTotalRegencies: number = province.data_kabupaten.length;
  return provinceTotalRegencies;
}

export function getProvinceTotalDistricts(province: any): number {
  if (!province?.data_kabupaten) return 0;
  const provinceRegencies: any = province.data_kabupaten;
  let provinceTotalDistricts: number = 0;
  provinceRegencies.forEach((regency: any) => (provinceTotalDistricts += regency.data_kecamatan.length));
  return provinceTotalDistricts;
}

export function getProvinceTotalVillages(province: any): number {
  if (!province?.data_kabupaten) return 0;
  const provinceRegencies: any = province.data_kabupaten;
  let provinceTotalVillages: number = 0;
  provinceRegencies.forEach((regency: any) => {
    regency.data_kecamatan.forEach((district: any) => (provinceTotalVillages += district.data_desa.length));
  });
  return provinceTotalVillages;
}

export function getRegencyTotalDistricts(regency: any): number {
  if (!regency?.data_kecamatan) return 0;
  let regencyTotalDistricts: number = countTotal(regency.data_kecamatan);
  return regencyTotalDistricts;
}

export function getRegencyTotalVillages(regency: any): number {
  if (!regency?.data_kecamatan) return 0;
  let regencyTotalVillages: number = 0;
  regency.data_kecamatan.forEach((district: any) => (regencyTotalVillages += countTotal(district.data_desa)));
  return regencyTotalVillages;
}

export function getRegencyFromProvince(province: any, regencyIdentifier: number | string) {
  if (!province?.data_kabupaten) return 0;
  const clonedProvince = { ...province };
  const regencyFilteredData = clonedProvince.data_kabupaten.find((regency: any) => (regency.kode_kabupaten == regencyIdentifier || regency.kode_kabupaten == province.kode_provinsi + regencyIdentifier ? regency : undefined));
  if (!regencyIdentifier) return null;
  return regencyFilteredData || null;
}

export function removeRegenciesFromProvince(province: any) {
  if (!province?.data_kabupaten) throw Error("Undefined Province or Regencies!");
  const clonedProvinceData = { ...province };
  delete clonedProvinceData.data_kabupaten;
  return clonedProvinceData;
}

export function removeDistrictsFromProvince(province: any) {
  if (!province?.data_kabupaten) throw Error("Undefined Province or Regencies!");
  const clonedProvinceRegencies = [...province.data_kabupaten];
  return clonedProvinceRegencies.map((regency) => removeDistrictsFromRegencies(regency));
}

export function removeVillagesFromProvince(province: any) {
  if (!province?.data_kabupaten) throw Error("Undefined Province or Regencies!");
  const clonedProvinceRegencies = [...province.data_kabupaten];
  return clonedProvinceRegencies.map((regency) => {
    regency.data_kecamatan = regency.data_kecamatan.map((district: any) => removeVillagesFromDistricts(district));
    return regency;
  });
}

export function removeDistrictsFromRegencies(regency: any) {
  if (!regency?.data_kecamatan) return {};
  const clonedRegencyData = { ...regency };
  delete clonedRegencyData.data_kecamatan;
  return clonedRegencyData;
}

export function removeVillagesFromDistricts(district: any) {
  if (!district?.data_desa) throw Error("Undefined Villages");
  const clonedDistrictData = { ...district };
  delete clonedDistrictData.data_desa;
  return clonedDistrictData;
}
