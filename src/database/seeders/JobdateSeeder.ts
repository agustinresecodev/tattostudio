import { SeederConfig } from "../../config/seeders";
import { JobdateFactory } from "../factories/JobdateFactory";
import { Seeder } from "./Seeder";
import { Artist } from "../../models/Artist";
import { Client } from "../../models/Client";
import { getRandomValueFromArray } from "../../helpers/common";
import { Jobdate } from "../../models/Jobdate";

export class JobdateSeeder extends Seeder{
    protected async generate():Promise<void>{
        const {ARTISTS} = SeederConfig;
        const {CLIENTS}= SeederConfig;
        const {JOBDATES} = SeederConfig;

        const artists= await Artist.find();
        const clients= await Client.find();

        const jobdates = new JobdateFactory().createMany(JOBDATES);
        jobdates.forEach(jobdate =>{
            jobdate.artist=getRandomValueFromArray(artists);
            jobdate.client=getRandomValueFromArray(clients);
        })
        await Jobdate.save(jobdates);
    }
}