import dbErrorHandler from "../helpers/dbErrorHandler.js";
import User from "../models/users.models.js";

const findAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const findOneUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
            return res.status(400).json({
                error: "User not found",
            });
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: "Could not retrieve user",
        });
    }
};

const create = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        return res.status(200).json({
            message: "Succesfully signed up!",
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
        let user = await User.findById(req.params.id);
        if (!user) throw new Error("User does not exist!");
        user.name = req.body?.name || user.name;
        user.email = req.body?.email || user.email;
        user.password = req.body?.password || user.password;
        const updatedUser = await user.save();
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const removeById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw new Error("User does not exist!");
        const deletedUser = await user.deleteOne();
        return res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

const removeAll = async (req, res) => {
    try {
        await User.deleteMany();
        return res.status(200).json({
            message: "All users deleted",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(error),
        });
    }
};

export default {
    findAllUsers,
    findOneUserById,
    create,
    update,
    removeById,
    removeAll,
};
