import express from "express";
import UserController from "../controller/users.controller.js";

const router = express.Router();

router
    .route("/")
    .get(UserController.findAllUsers)
    .post(UserController.create)
    .delete(UserController.removeAll);

router
    .route("/:id")
    .get(UserController.findOneUserById)
    .put(UserController.update)
    .delete(UserController.removeById);

export default router;
