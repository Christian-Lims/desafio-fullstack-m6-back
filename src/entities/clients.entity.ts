import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, OneToMany} from "typeorm"
import { getRounds, hashSync } from "bcryptjs";
import { Contact } from "./contacts.entity";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 180})
    full_name: string

    @Column({ length: 120, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @Column({length: 100})
    phone_number: string

    @Column({ default: true })
    isActive: boolean
    
    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact, (contact) => contact.client)
	contacts: Contact;

    @BeforeInsert()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }  
}