import { Entity, PrimaryGeneratedColumn,Column,OneToOne,JoinColumn,OneToMany } from "typeorm"
import { User } from "./User";
import { Date } from "./Date";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"user_id"})
    userID!: number;

    @Column({name:"state"})
    style!: string;

    
    //Relation 1:1 with user
    @OneToOne(()=>User,(user)=>user.id)
    @JoinColumn({name:"user_id"})
    user!:User

    //Relation 1:N with Dates
    @OneToMany(()=>Date,(date)=>date.clientID)
    @JoinColumn({name:"id"})
    dates?:Date[]
}
