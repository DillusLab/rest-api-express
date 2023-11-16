import { Router } from "express";
import { methods as laguageController } from "./../controllers/language.controller";

const router = Router();

router.get("/", laguageController.getLanguages);
router.get("/:id", laguageController.getLanguage); // Con parametros en la url
router.get("/single", laguageController.getLanguage); // Enviando json en el body
router.post("/", laguageController.addLanguage);
router.put("/", laguageController.updateLanguage);
router.delete("/", laguageController.deleteLanguage);

export default router;