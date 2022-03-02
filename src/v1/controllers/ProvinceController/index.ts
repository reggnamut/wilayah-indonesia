import { Request, Response } from "express";
import { httpResponseCode } from "../../constants";
import { callAllProvince, callOnlyProvinceByIdentifier } from "../../lib/libraries";

export const ProvinceIndex = (req: Request, res: Response) => {
  const allProvincesData = callAllProvince();
  return res.status(200).json({
    ...httpResponseCode[200],
    data: allProvincesData,
  });
};

export const ProvinceByIdentifier = (req: Request, res: Response) => {
  const identifier = req.params.province_id;
  const allProvincesData = callOnlyProvinceByIdentifier(identifier);
  if (!allProvincesData)
    return res.status(404).json({
      ...httpResponseCode[404],
      message: "There is nothing data for your requests",
      data: null,
    });

  return res.status(200).json({
    ...httpResponseCode[200],
    data: allProvincesData,
  });
};
