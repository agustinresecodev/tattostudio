import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { User } from "./User";

@Entity('dates')
export class Date extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name:"day_date" })
    day_date!: Date;

    @Column({ name: "artist_id" })
    artist!: number;

    @Column({name:"client_id"})
    client!: number;

    //relacion M:N con tabla User (artist_id)
    @ManyToMany(()=> User,(user) => user.date)
    @JoinColumn({name: "artist_id"})
    user!:User[];

    //relacion M:N con tabla User (client_id)
    //@ManyToMany(()=> User,(user) => user.dates)
    //@JoinColumn({name: "artist_id"})
    //client!:Client[];

}
