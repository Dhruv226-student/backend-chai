import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, res, cb) {
    cb(null,file.orignalmame);
  },
});
export const upload = multer({storage})
