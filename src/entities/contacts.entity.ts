import { Client } from "./clients.entity"
import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm"


@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 180})
    full_name: string

    @Column({ length: 120 })
    email: string

    @Column({length: 100})
    phone_number: string
    
    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Client
}
