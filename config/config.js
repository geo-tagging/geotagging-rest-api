require("dotenv").config();

let config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  gcp: {
    projectId: process.env.GCP_PROJECT_ID,
    keyFilename: process.env.GCP_KEYFILE_PATH,
    bucketName: process.env.GCS_BUCKET_NAME,
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
