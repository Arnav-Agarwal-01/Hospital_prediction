import mongoose from 'mongoose';

const UserSchema={
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}

const User=mongoose.model('User',UserSchema);
export default User;