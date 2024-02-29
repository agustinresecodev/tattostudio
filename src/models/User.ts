import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import {Role} from "./Role"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"first_name"})
    firstName!: string;

    @Column({name:"last_name"})
    lastName!:string;

    @Column({name:"email"})
    email!:string;

    @Column({name:"phone"})
    phone!:number;

    @Column({name:"password"})
    password!:string;

    @Column({name:"is_active"})
    isActive!:boolean;

    //Relacion N:1 con Roles
    @ManyToOne(()=>Role,(role)=>role.user)
    @JoinColumn({name:"role_id"})
    role_id!:Role;

}
