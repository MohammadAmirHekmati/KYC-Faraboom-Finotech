import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({  name: "matche-mobile-national-code" })
export class MatchMobileNationalCodeEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    mobile: string

    @Column()
    nationalCode: string

    @Column({default: false})
    isValid: boolean

    @Column({nullable: true})
    trackId: string

    @Column()
    status: string

}