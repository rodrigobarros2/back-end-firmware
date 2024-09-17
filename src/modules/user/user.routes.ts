import { Router } from "express";
import { UserController } from "./controllers/user.controller";

const router = Router();
const userController = new UserController();

/* aqui eu adiciono os midlewwares*/
//validate tokken midleware/ acesso do usuario super admin etc..
//middleware de log, zod, etc..

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
