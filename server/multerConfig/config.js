import multer from "multer";
//storage config
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./userUploads");
  },
  filename: (req, file, callback) => {
    const filename = `image-${date.now()},${file.originalname}`;
    callback(null, filename);
  },
});

//filter
const filefilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Only Jpg,Png and Jpeg formate allowed"));
  }
};

const userUpload=multer({
    storage:storage,
    fileFilter:filefilter
})
export default userUpload