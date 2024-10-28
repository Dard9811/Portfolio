import mongoose from "mongoose";

const ContactsSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const Contacts = mongoose.model("Contacts", ContactsSchema);

export default Contacts;
