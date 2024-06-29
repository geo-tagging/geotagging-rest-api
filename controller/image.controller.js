// controller/image.controller.js
const {
  uploadImageToGCS,
  getImageFromGCS,
} = require("../helper/image-uploader");

async function upload(req, res) {
  if (req.file) {
    try {
      const publicUrl = await uploadImageToGCS(req.file);
      res.status(201).json({
        message: "Image uploaded successfully",
        url: publicUrl,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      message: "No image file provided",
    });
  }
}

function getImage(req, res) {
  const fileName = req.params.filename;
  const readStream = getImageFromGCS(fileName);

  readStream.on("error", (err) => {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  });

  readStream.pipe(res);
}

module.exports = {
  upload,
  getImage,
};
