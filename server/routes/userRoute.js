import express from "express";
import multer from "multer";
import { imageUpload } from "../controllers/userController.js";
// import userUpload from "../multerConfig/config.js";
const router = express.Router();
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: fileStorage });
router.post("/uploadImages", upload.array("userimg"), imageUpload);

export default router;
