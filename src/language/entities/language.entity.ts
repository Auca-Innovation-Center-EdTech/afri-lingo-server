import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Language {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 10 })
    code: string;

    @Column({ type: 'varchar', length: 20 })
    level: 'Beginner' | 'Intermediate' | 'Advanced';

    @Column('text',{ nullable: true })
    description?: string;

    @Column({ default: true })
    isActive: boolean;
}