import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Artist } from "./Artist";
import { Client } from "./Client";

@Entity('jobdates')
export class Jobdate extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name:"day_date" })
    day_date!: Date;

    @Column({ name: "artist_id" })
    artistID!: number;

    @Column({name:"client_id"})
    clientID!: number;

    //relation N:1 with artist 
    @ManyToOne(()=>Artist,(artist)=>artist.jobdates)
    @JoinColumn({name:"artist_id"})
    artist!:Artist;

    //relation N:1 with artist 
    @ManyToOne(()=>Artist,(client)=>client.jobdates)
    @JoinColumn({name:"client_id"})
    client!:Client;
}
