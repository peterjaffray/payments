import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "CreditCard",
    engine: "InnoDB",
    database: 'method_of_payment',
})
export class CreditCard extends BaseEntity {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @UpdateDateColumn()
    updatedDate: Date;

    @CreateDateColumn()
    createdDate: Date;

    @Column()  
    card_number: string;

    @Column()
    "card-expiry": string;

    @Column()
    "card-expiry-month": string;

    @Column()
    "card-expiry-year": string;

    @Column()
    "timestamp": string;

    @Column()
    "card-cvc": number;

    @Column()
    postal_code: string;

    @Column()
    phone: string;

    @Column()
    ip_address: string;
    
    @Column()
    client_id: string;

}