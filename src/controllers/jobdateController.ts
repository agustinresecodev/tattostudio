import { Request,Response } from "express";
import { User } from "../models/User";
import { Jobdate } from "../models/Jobdate";
import { Artist } from "../models/Artist";
import { Client } from "../models/Client";
import { Role } from "../models/Role";
import bcrypt from 'bcrypt';
import { UserRoles } from "../constants/UserRoles";
import { Console } from "console";

export const jobdateController = {

    //Get all Jobdates
    async getAll(req:Request,res:Response){
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            const [jobdates,totalJobdates] = await Jobdate.findAndCount(
                {
                    select:{
                        id:true,
                        day_date:true,
                        description:true,
                        price:true,
                    }
                }
            );
            
            res.json(jobdates);

        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Get Jobdate by ID
    async getById(req:Request,res:Response){
        try {
            const id = Number(req.params.id);
            const jobdate = await Jobdate.findOne({
                relations:{
                    artist:{
                        user:true
                    },
                    client:{
                        user:true
                    
                    },
                },
                select:{
                    id:true,
                    day_date:true,
                    description:true,
                    price:true,
                    artist:{
                            id:true,
                            user:{
                                firstName:true,
                                email:true,
                                phone:true,
                            }                                  
                    },
                    client:{
                        id:true, 
                        user:{
                            firstName:true,
                            email:true,
                            phone:true,
                        }               
                    }
                    },
                    where:{
                        id:id
                    }
                    
                });
            if(!jobdate){
                res.status(404).json({message:"Jobdate not found"});
                return;
            }

            console.log(jobdate);

            res.json(jobdate);
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Create Jobdate
    async create(req:Request,res:Response){
        try {
            const {day_date,description,price,artist,client} = req.body;
            const jobdate = Jobdate.create({
                day_date:day_date,
                description: description,
                price:price,
                artistID:artist,
                clientID:client
            });

            await jobdate.save();
            res.json(jobdate);
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
            
        }
    },

    //Update Jobdate
    async update(req:Request,res:Response){
        try {
            const id = Number(req.params.id);
            const {day_date,description,price,artist,client} = req.body;
            const jobdate = await Jobdate.findOne({where:{id:id}});
                
            if(!jobdate){
                res.status(404).json({message:"Jobdate not found"});
                return;
            }
            jobdate.day_date = day_date;
            jobdate.description = description;
            jobdate.price = price;
            jobdate.artistID = artist;
            jobdate.clientID = client;
            await jobdate.save();
            res.json(jobdate);
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Delete Jobdate
    async delete(req:Request,res:Response){
        try {
            const id = Number(req.params.id);
            const jobdate = await Jobdate.findOne({where:{id:id}});
            if(!jobdate){
                res.status(404).json({message:"Jobdate not found"});
                return;
            }
            await jobdate.remove();
            res.json({message:"Jobdate deleted"});
        }catch(error){
            res.status(500).json({message:"Something went wrong"});
        }
    },

    //Get all Jobdates by Client
    async getByLogedClient(req:Request,res:Response){

    const reqToken = req.tokenData.userId;
    console.log(reqToken); 

    const logedClient = await Client.findOne({
        select:{
            id:true
        },
        where:{
            userID:req.tokenData!.userId
        }});

        console.log(req.tokenData);
    const jobdates = await Jobdate.find({
        relations:{
            artist:{
                user:true
            },
            client:{
                user:true
            },
        },
        select:{
            id:true,
            day_date:true,
            description:true,
            price:true,
            artist:{
                    id:true,
                    user:{
                        firstName:true,
                        email:true,
                        phone:true,
                    }                                
            },
            client:{
                id:true,
                user:{
                    firstName:true,
                    email:true,
                    phone:true,                
                }
            
            
            }
        },
        where:{
            clientID:logedClient!.id
        }});

        res.json(jobdates);

    },

    //Get all Jobdates by Loged Artist
    async getByLogedArtist(req:Request,res:Response){
        const artist = await Artist.findOne({
            select:{
                id:true
            },
            where:{
                userID:req.tokenData?.userId
            }});
            console.log(req.tokenData);
            console.log(artist);
    
        const jobdates = await Jobdate.find({
            relations:{
                artist:true,
                client:true,
            },
            select:{
                id:true,
                day_date:true,
                description:true,
                price:true,
                artist:{
                        id:true,
                        user:{
                            firstName:true,
                            email:true,
                            phone:true,
                        }                                  
                },
                client:{
                    id:true, 
                    user:{
                        firstName:true,
                        email:true,
                        phone:true,
                    }               
                }
                },
                where:{
                    artistID:artist?.id
                }
                
            });
            
            res.json(jobdates).status(200);
    
        }

}
