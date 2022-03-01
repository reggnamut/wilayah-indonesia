import { getProvinceTotalDistricts } from "../src/v1/lib/helper";

describe("Get districts total in a province", () => {
  it("If total districts is zero", () => {
    const provinceWithoutDistricts = {
      nama_provinsi: "Sampel Provinsi #1",
      data_kabupaten: [{ data_kecamatan: [] }],
    };
    expect(getProvinceTotalDistricts(provinceWithoutDistricts)).toBe(0);
  });

  it("If total districts is greater than zero", () => {
    const provinceWithoutDistricts = {
      nama_provinsi: "Sampel Provinsi #1",
      data_kabupaten: [{ data_kecamatan: [{ data_desa: [] }] }],
    };
    expect(getProvinceTotalDistricts(provinceWithoutDistricts)).toBeGreaterThan(0);
  });
});
