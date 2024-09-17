import { Router } from "express";
import { FirmwareController } from "./controllers/firmware.controller";

const router = Router();
const firmwareController = new FirmwareController();

router.post("/", firmwareController.create);
router.get("/", firmwareController.findAll);
router.get("/:id", firmwareController.findById);
router.put("/:id", firmwareController.update);
router.delete("/:id", firmwareController.delete);

export default router;
