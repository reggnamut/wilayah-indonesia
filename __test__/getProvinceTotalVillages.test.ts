import { getProvinceTotalVillages } from "../src/v1/lib/helper";

describe("Get regencies total in a province", () => {
  it("If total regencies is zero", () => {
    const provinceWithoutVillages = { data_kabupaten: [{ data_kecamatan: [{ data_desa: [] }] }] };

    expect(getProvinceTotalVillages({})).toBe(0);
    expect(getProvinceTotalVillages(provinceWithoutVillages)).toBe(0);
  });

  it("If total regencies is greater than zero", () => {
    const provinceWithRegencies = { data_kabupaten: [{ data_kecamatan: [{ data_desa: [{ nama_desa: "Sampel Desa #1" }] }] }] };
    expect(getProvinceTotalVillages(provinceWithRegencies)).toBeGreaterThan(0);
  });
});
