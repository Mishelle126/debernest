import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { AutorEntity } from "./autor.models";


@Entity('libros', { schema: 'ventas' })
export class LibroEntity {
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
        name: 'titulo',
        nullable: false,
        comment: 'título del libro',
    })
    titulo: string;

    @Column('varchar', {
        name: 'descripcion',
        nullable: true,
        comment: 'descripción del libro',
    })
    descripcion: string;

    autor:AutorEntity;

}