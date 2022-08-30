import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column({ default: true })
    public isActive: boolean;
}
