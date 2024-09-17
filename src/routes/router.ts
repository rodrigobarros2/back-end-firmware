import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import firmwareRoutes from "../modules/firmware/firmware.routes";
import paymentRoutes from "../modules/payment/payment.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/firmwares", firmwareRoutes);
router.use("/payment", paymentRoutes);

export default router;
