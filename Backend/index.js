require("dotenv").config();
const http = require("http");
//const fs = require("fs");
//const https = require("https");
const express = require("express");
const sequelize = require("./db.js");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");
const multer = require("multer");
const app = express();

// const privateKey = fs.readFileSync(
//   "/etc/letsencrypt/live/kosmoss.host/privkey.pem",
//   "utf8"
// );
// const certificate = fs.readFileSync(
//   "/etc/letsencrypt/live/kosmoss.host/cert.pem",
//   "utf8"
// );
// const ca = fs.readFileSync(
//   "/etc/letsencrypt/live/kosmoss.host/chain.pem",
//   "utf8"
// );
//
//
// const credentials = {
//   key: privateKey,
//   cert: certificate,
//   ca: ca,
// };
//

const CategoryController = require('./src/controllers/CategoryControllers')

app.use(cors());
const server = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);
app.use(express.json());
app.use(bodyParser.json());

const storageAvatar = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './files/user/avatar');
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
});
const uploadAvatar = multer({ storageAvatar });

app.use("/api/user/avatar_picture", express.static(path.resolve(__dirname, "files", "user", "avatar")));
app.use("/api/category/icon", express.static(path.resolve(__dirname, "files", "categoryicon")));
app.use("/api/category/images", express.static(path.resolve(__dirname, "files", "ctegoryimages")));
app.use('/api/list_category', CategoryController.getAllCategory)

app.post('/api/list_category_pages', CategoryController.getPageCategory)
app.post('/api/list_sub_category_pages', CategoryController.getSubPageCategory)

const start = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        server.listen(80, () => console.log(`server started on port 80`));
        //httpsServer.listen(443, () => console.log(`server started on port 443`));
    }catch (error){
        console.log(error)
    }
};
start();