import { faker } from "@faker-js/faker";
import { Jobdate } from "../../models/Jobdate";
import { Factory } from "./Factory";

export class JobdateFactory extends Factory<Jobdate>{
    protected generate():Jobdate{
        return{
            day_date: faker.date.future(),
        } as Jobdate
    }
}