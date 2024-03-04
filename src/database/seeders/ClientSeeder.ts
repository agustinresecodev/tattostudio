import { Client } from "../../models/Client";
import { Seeder } from "./Seeder";
import { SeederConfig } from "../../config/seeders";
import { User } from "../../models/User";
import { getRandomValueFromArray } from "../../helpers/common";
import { ClientFactory } from "../factories/ClientFactory";

export class ClientSeeder extends Seeder{
    protected async generate():Promise <void>{
        const {CLIENTS} = SeederConfig;

        const users =await User.find();
        const clients = new ClientFactory().createMany(CLIENTS);
        clients.forEach(client=>{
            client.user=getRandomValueFromArray(users)
        })
        await Client.save(clients);
    } 
}