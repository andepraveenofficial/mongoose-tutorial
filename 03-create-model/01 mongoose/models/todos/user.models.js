
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // Fields

        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true, "Password is required"] // we can mention custom message
        }
    },
    {
        // timestamps
         timeStamps:true
    }
)

export const User = mongoose.model("User", userSchema)