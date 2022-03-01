import { getProvinceTotalRegencies } from "../src/v1/lib/helper";

describe("Get regencies total in a province", () => {
  it("If total regencies is zero", () => {
    const provinceWithoutRegencies = { data_kabupaten: [] };
    expect(getProvinceTotalRegencies(provinceWithoutRegencies)).toBe(0);
  });

  it("If total regencies is greater than zero", () => {
    const provinceWithRegencies = { data_kabupaten: [{ data_kecamatan: [] }, { data_kecamatan: [] }, { data_kecamatan: [] }] };
    expect(getProvinceTotalRegencies(provinceWithRegencies)).toBeGreaterThan(0);
  });
});
