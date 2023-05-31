import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Autor', {schema:'ventas'})

export class AutorEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRERNT_TIMESTAMP',
    })
    createAt: Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRERNT_TIMESTAMP',
    })
    UpdateAt: Date;
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    DeleteAt: Date;
}