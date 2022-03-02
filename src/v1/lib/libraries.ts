import { getRegencyFromProvince, getProvinceMetadata, removeRegenciesFromProvince, getRegencyMetadata, removeDistrictsFromRegencies } from "./helper";
import data from "../../../data/json/wilayah.json";

const clonedRealData: any = data;
export const callAllProvince = () => {
  const clonedProvincesData = [...clonedRealData];
  const dataResult = clonedProvincesData.map((province) => {
    const provinceMetadata = getProvinceMetadata(province);
    const provinceData = removeRegenciesFromProvince(province);
    return { ...provinceData, ...provinceMetadata };
  });
  return dataResult;
};

export const callProvinceByIdentifier = (provinceIdentifier: number | string) => {
  const clonedProvincesData = [...clonedRealData];
  if (typeof provinceIdentifier === "undefined") return null;
  const dataResult = clonedProvincesData.find((province) => (province.kode_provinsi === provinceIdentifier ? province : undefined));
  if (!dataResult) return undefined;
  return dataResult;
};

export const callOnlyProvinceByIdentifier = (provinceIdentifier: number | string) => {
  const dataResult = { ...callProvinceByIdentifier(provinceIdentifier) };
  const provinceMetadata = getProvinceMetadata(dataResult);
  const provinceData = removeRegenciesFromProvince(dataResult);
  return { ...provinceData, ...provinceMetadata };
};

export const callRegencyByIdentifier = (provinceIdentifier: number | string, regencyIdentifier: number | string) => {
  const provinceData = { ...callProvinceByIdentifier(provinceIdentifier) };
  const provinceMetadata = getProvinceMetadata(provinceData);
  const regencyData = getRegencyFromProvince(provinceData, regencyIdentifier);
  const regencyWithoutDistricts = removeDistrictsFromRegencies(regencyData);
  const regencyMetadata = getRegencyMetadata(regencyData);
  return !regencyData
    ? undefined
    : {
        ...provinceData,
        ...provinceMetadata,
        data_kabupaten: {
          ...regencyWithoutDistricts,
          ...regencyMetadata,
        },
      };
};
