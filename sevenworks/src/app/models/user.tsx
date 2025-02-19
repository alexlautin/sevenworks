import mongoose, {Document, Model, Schema} from 'mongoose';

interface User extends Document{
    email: string;
    password: string;
    id: string;
}

const UserSchema: Schema<User> = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User: Model<User> = mongoose.models.User || mongoose.model<User>("User", UserSchema);

export default User;