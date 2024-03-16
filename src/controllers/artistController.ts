import { Request, Response } from "express";
import { Artist } from "../models/Artist";
import { UserRoles } from "../constants/UserRoles";
import { User } from "../models/User";

export const artistController = {
  async getAll(req: Request, res: Response) {
    try {
      // find and count all artists
      const artists = await Artist.findAndCount({
        relations: {
          user: true,
        },

        select: {
          user: {
            firstName: true,
            email: true,
            phone: true,
          },
        },
      });

      //response with the artists and the total of artists
      res.json(artists).status(200);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  async create(req: Request, res: Response) {
    try {
      //get the data from the request body
      const { firstName, email, password, phone, style, area } = req.body;

      //if there is no data, return a 400 status
      if (!firstName || !email || !password || !phone) {
        res.status(400).json({ message: "Failed to create artist" });
        return;
      }

      //check if the email is already in use
      const userExists = await User.findOne({ where: { email: email } });

      //if the email is already in use, return a 400 status
      if (userExists) {
        res.status(400).json({ message: "Email already in use" });
        return;
      }

      //create a new user
      const user = User.create({
        firstName: firstName,
        email: email,
        password: password,
        phone: phone,
        role: UserRoles.ARTIST,
      });

      //save the user
      await User.save(user);

      //create a new artist
      const artist = Artist.create({
        style: style,
        area: area,
        user: user,
      });

      //save the artist
      await Artist.save(artist);

      //response with a 201 status
      res.status(201).json({ message: "Artist created succesfully" });
    } catch (error) {}
  },
};
