import { getProvinceMetadata } from "../src/v1/lib/helper";

describe("Get province meta data", () => {
  const getDummyObjectResult = (regenciesTotal: number, districtsTotal: number, villagesTotal: number) => ({ total_kabupaten: regenciesTotal, total_kecamatan: districtsTotal, total_desa: villagesTotal });

  it("Blank or empty data (regencies, districts, villages)", () => {
    const dummyObjectWithoutDistricts = { data_kabupaten: [] };
    const dummyObjectWithoutVillages = { data_kabupaten: [{ data_kecamatan: [] }] };
    const dummyObjectWithZeroVillages = { data_kabupaten: [{ data_kecamatan: [{ data_desa: [] }] }] };
    expect(getProvinceMetadata([])).toMatchObject(getDummyObjectResult(0, 0, 0));
    expect(getProvinceMetadata(dummyObjectWithoutDistricts)).toMatchObject(getDummyObjectResult(0, 0, 0));
    expect(getProvinceMetadata(dummyObjectWithoutVillages)).toMatchObject(getDummyObjectResult(1, 0, 0));
    expect(getProvinceMetadata(dummyObjectWithZeroVillages)).toMatchObject(getDummyObjectResult(1, 1, 0));
  });

  it("regencies, districts, villages data isn't zero", () => {
    const dummyObjectWithZeroVillages = { data_kabupaten: [{ data_kecamatan: [{ data_desa: [{}] }] }] };
    expect(getProvinceMetadata(dummyObjectWithZeroVillages)).toMatchObject(getDummyObjectResult(1, 1, 1));
  });
});
