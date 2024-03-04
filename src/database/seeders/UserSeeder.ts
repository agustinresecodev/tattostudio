import { SeederConfig } from "../../config/seeders";
import { UserRole } from "../../constants/UserRoles";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeder";

export class UserSeeder extends Seeder {
    protected async generate(): Promise<void> {
       const { ADMINS, ARTISTS, CLIENTS } = SeederConfig;
 
       const userFactory = new UserFactory();
 
       // admins
       const adminUsers = userFactory.createMany(ADMINS);
       adminUsers.forEach((user) => {
          user.role_id = UserRole.ADMIN;
       });
 
       // managers
       const artistUsers = userFactory.createMany(ARTISTS);
       artistUsers.forEach((user) => {
          user.role_id = UserRole.ARTIST;
       });
 
       // clients
       const clientUsers = userFactory.createMany(CLIENTS);
       clientUsers.forEach((user) => {
          user.role_id = UserRole.CLIENT;
       });
 
       // save to database
       const allUsers = [...adminUsers, ...artistUsers, ...clientUsers];
       await User.save(allUsers);
    }
 }