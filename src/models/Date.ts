import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { User } from "./User";
import { Artist } from "./Artist";
import { Client } from "./Client";

@Entity('dates')
export class Date extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name:"day_date" })
    day_date!: Date;

    @Column({ name: "artist_id" })
    artistID!: number;

    @Column({name:"client_id"})
    clientID!: number;

    //relation N:1 with artist 
    @ManyToOne(()=>Artist,(artist)=>artist.dates)
    @JoinColumn({name:"artist_id"})
    artist!:Artist;

    //relation N:1 with artist 
    @ManyToOne(()=>Artist,(client)=>client.dates)
    @JoinColumn({name:"client_id"})
    client!:Client;
}
