import dbErrorHandler from "../helpers/dbErrorHandler.js";
import Contact from "../models/contacts.models.js";

const findAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const findOneContactById = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact)
            return res.status(400).json({
                error: "Contact not found",
            });
        return res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: "Could not retrieve contact",
        });
    }
};

const create = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        return res.status(200).json({
            message: "Contact succesfully created!",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const update = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) throw new Error("Contact does not exist!");
        contact.firstname = req.body?.firstname || contact.firstname;
        contact.lastname = req.body?.lastname || contact.lastname;
        contact.email = req.body?.email || contact.email;
        const updatedContact = await contact.save();
        return res.status(200).json(updatedContact);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const removeById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) throw new Error("Contact does not exist!");
        const deletedContact = await contact.deleteOne();
        return res.status(200).json(deletedContact);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const removeAll = async (req, res) => {
    try {
        await Contact.deleteMany();
        return res.status(200).json({
            message: "All contacts deleted",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

export default {
    findAllContacts,
    findOneContactById,
    create,
    update,
    removeById,
    removeAll,
};
