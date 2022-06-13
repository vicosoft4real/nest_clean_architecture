import { Todo } from 'src/infrastructure/enity/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Todo, (todo) => todo.category, { onDelete: 'CASCADE' })
  todo: Todo[];
}
