import express from "express";
import { ProvinceByIdentifier, ProvinceIndex } from "../controllers/ProvinceController";
import { RegencyByIdentifier } from "../controllers/RegencyController";
const router = express.Router();

router.get("/provinsi/", ProvinceIndex);
router.get("/provinsi/:province_id([0-9]{0,2})", ProvinceByIdentifier);
// router.get("/provinsi/:province_id([0-9]{0,2})/kabupaten/", RegencyIndex);
router.get("/provinsi/:province_id([0-9]{0,2})/kabupaten/:regency_id([0-9]{0,5})", RegencyByIdentifier);
// router.get("/provinsi/:province_id([0-9]{0,2})/kabupaten/:regency_id(");

export default router;
