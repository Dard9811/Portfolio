import express from "express";
import ContactsController from "../controller/contacts.controller.js";

const router = express.Router();

router
    .route("/")
    .get(ContactsController.findAllContacts)
    .post(ContactsController.create)
    .delete(ContactsController.removeAll);

router
    .route("/:id")
    .get(ContactsController.findOneContactById)
    .put(ContactsController.update)
    .delete(ContactsController.removeById);

export default router;
