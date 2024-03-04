import { Entity, PrimaryGeneratedColumn,Column,OneToOne,JoinColumn,OneToMany, BaseEntity } from "typeorm"
import { User } from "./User";
import { Jobdate } from "./Jobdate";

@Entity('clients')
export class Client extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"user_id"})
    userID!: number;

    @Column({name:"area"})
    area!: string;

    
    //Relation 1:1 with user
    @OneToOne(()=>User,(user)=>user.id)
    @JoinColumn({name:"user_id"})
    user!:User

    //Relation 1:N with Dates
    @OneToMany(()=>Jobdate,(jobdate)=>jobdate.clientID)
    @JoinColumn({name:"id"})
    jobdates?:Jobdate[]
}
