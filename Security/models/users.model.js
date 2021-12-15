import { Schema, model } from 'mongoose';

const UsersSchema = new Schema({
    name: String,
    username: String,
    password: String,
    email: String
}, {
    timestamps: true,
    versionKey: false
});

const UserModel = model('UserModel', UsersSchema);

export default UserModel;