import { Schema, model } from 'mongoose';

const ActionsSchema = new Schema({
    time: String,
    action: String,
    succesfull: Boolean
}, {
    timestamps: true,
    versionKey: false
});

const ActionSchema = model('Actions', ActionsSchema);

export default ActionSchema;