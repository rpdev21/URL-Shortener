import mongoose  , {Schema} from 'mongoose';
const userSchema = new Schema({
    'email': {type: String, required: true, unique: true},
    'password': {type: String,minLength:6 ,required: true},
    'name': {type: String, required: true},
});
export const UserModel = mongoose.model('users', userSchema);