import { Request, Response } from 'express';
import { httpResponseCode } from '../../constants';
import { callRegencyDistricts } from '../../lib/libraries';

export const DistrictIndex = (req: Request, res: Response) => {
  const provinceId = req.params.province_id;
  const regencyId = req.params.regency_id;
  return res.json(callRegencyDistricts(provinceId, regencyId));
};
