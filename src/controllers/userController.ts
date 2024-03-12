import { Request,Response } from "express";
import { User } from "../models/User";
import { Jobdate } from "../models/Jobdate";
import { Artist } from "../models/Artist";
import { Client } from "../models/Client";
import { Role } from "../models/Role";
import bcrypt from 'bcrypt';
import { UserRoles } from "../constants/UserRoles";

export const userController = {
    //REGISTER
    async create(req:Request,res:Response){
        try {
            const {firstName,lastName,email,phone,password,isActive,} = req.body;
            const hashedPassword = await bcrypt.hash(password,10);
            
            const user = User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password:hashedPassword,
                isActive:isActive,
                role:UserRoles.CLIENT

            });
            await user.save();


            res.status(200).json({message:"User created successfully"});
        }catch(error){
            console.error(error);
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //EDIT PROFILE
    async update(req:Request,res:Response){
        try {
            const userId = Number(req.params.id);
            const {firstName,lastName,email,phone,password,isActive} = req.body;
            const user = await User.findOne({where:{id:userId}});
                
            if(!user){
                res.status(404).json({message:"User not found"});
                return;
            }
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.phone = phone;
            user.password = password;
            user.isActive = isActive;
            await user.save();
            res.json(user);
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },




    //FIXME: JUST FOR ADMINS
    //Get all Users Profile
    async getAll(req:Request,res:Response){
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            const [users,totalUsers] = await User.findAndCount(
                {
                    select:{
                        id:true,
                        firstName:true,
                        lastName:true,
                        email:true,
                        phone:true,
                        isActive:true,
                        
                    }
                }
            );
            res.json(users);
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Get User Profile by ID
    async getProfileById(req:Request,res:Response){
        try {
            const userId = Number(req.params.id);
   
            const user = await User.findOne({
               relations: {
                  role: true,
               },
               where: { id: userId },
            });

            console.log(user);

            if (!user) {
               res.status(404).json({ message: "User not found" });
               return;
            }
   
            res.json(user);
         } catch (error) {
            res.status(500).json({
               message: "Failed to retrieve user",
            });
         }
    }

    

}
