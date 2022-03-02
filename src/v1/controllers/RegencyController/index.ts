import { Request, Response } from "express";
import { httpResponseCode } from "../../constants";
import { callRegencyByIdentifier } from "../../lib/libraries";

export const RegencyIdenx = (req: Request, res: Response) => {
  const provinceId = req.params.province_id;
  // const regenciesData =
};

export const RegencyByIdentifier = (req: Request, res: Response) => {
  const provinceId = req.params.province_id;
  const regencyId = req.params.regency_id;
  const provinceData = callRegencyByIdentifier(provinceId, regencyId);
  return !provinceData
    ? res.status(404).json({
        ...httpResponseCode[404],
        message: "There is nothing data for your requests",
        data: null,
      })
    : res.status(200).json({
        ...httpResponseCode[200],
        data: provinceData,
      });
};
