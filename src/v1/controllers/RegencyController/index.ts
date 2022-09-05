import { Request, Response } from 'express';
import { httpResponseCode } from '../../constants';
import { callProvinceRegencies, callRegencyByIdentifier } from '../../lib/libraries';

export const RegencyIndex = (req: Request, res: Response) => {
  const provinceId = req.params.province_id;
  const provinceData = callProvinceRegencies(provinceId);
  return res.status(200).json({
    ...httpResponseCode[200],
    data: provinceData,
  });
};

export const RegencyByIdentifier = (req: Request, res: Response) => {
  const provinceId = req.params.province_id;
  const regencyId = req.params.regency_id;
  const provinceData = callRegencyByIdentifier(provinceId, regencyId);
  return !provinceData
    ? res.status(404).json({
        ...httpResponseCode[404],
        message: `Kode kabupaten '${regencyId}' dengan kode provinsi '${provinceId}' tidak dapat ditemukan!`,
        data: null,
      })
    : res.status(200).json({
        ...httpResponseCode[200],
        data: provinceData,
      });
};
