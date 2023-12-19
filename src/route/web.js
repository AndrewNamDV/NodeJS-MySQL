import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',homeController.getHomePage);
    router.get('/detail',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);

    router.get('/',(req,res) => {
        return res.send('Hello world')
    });
    return app.use("/",router);
}

module.exports = initWebRoutes;