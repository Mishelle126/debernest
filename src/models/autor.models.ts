import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";


@Entity('autores', { schema: 'ventas' })
export class AutorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre del autor',
    })
    nombre: string;

    @Column('varchar', {
        name: 'descripcion',
        nullable: true,
        comment: 'descripción del autor',
    })
    descripcion: string;

   
}