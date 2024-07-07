import { model, Schema, Types } from "mongoose";

//import mongoose-to-json
import { toJSON } from "@reis/mongoose-to-json"




const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
    },
    { timestamps: true }
  );
    
 

userSchema.plugin(toJSON);
export const UserModel = model('user', userSchema);
