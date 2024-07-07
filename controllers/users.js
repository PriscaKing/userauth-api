// import { UserModel } from  "../models/user.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../service/auth.js";
import { UserModel } from "../models/user.js";

export const handleUserSignup =  async(req, res) => {
   try {
     const { name, email, password } = req.body;
     await UserModel.create({
       name,
       email,
       password,
     });
     return res.redirect("/");
   } catch (error) {
    
   }
  };
  
  export const handleUserLogin = async (req, res)=> {
 try {
       const { email, password } = req.body;
       const user = await UserModel.findOne({name, email, password });
     
       if (!user)
         return res.render("login", {
           error: "Invalid Username or Password",
         });
     
       const sessionId = uuidv4();
       setUser(sessionId, user);
       res.cookie("uid", sessionId);
       return res.redirect("/");
 } catch (error) {
    next(error);
 }
  }
  


export default {
    handleUserSignup,
    handleUserLogin,
}


















