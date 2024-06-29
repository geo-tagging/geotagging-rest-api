// helper/gcs-uploader.js
const { Storage } = require("@google-cloud/storage");
const Multer = require("multer");
const config = require("../config/config");

const storage = new Storage({
  projectId: config.development.gcp.projectId, // Use the config
  keyFilename: config.development.gcp.keyFilename, // Use the config
});

const bucket = storage.bucket(config.development.gcp.bucketName); // Use the config

const multer = Multer({
  storage: Multer.memoryStorage(), // Menggunakan penyimpanan memori
  limits: {
    fileSize: 1024 * 1024 * 2, // Batas ukuran file 2MB
  },
});

const uploadImageToGCS = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No image file provided");
      return;
    }

    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => {
      reject(err);
    });

    blobStream.on("finish", () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
};

const getImageFromGCS = (fileName) => {
  return bucket.file(fileName).createReadStream();
};

module.exports = {
  multer,
  uploadImageToGCS,
  getImageFromGCS,
};
