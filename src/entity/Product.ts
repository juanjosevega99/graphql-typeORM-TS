import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number
  
  @Field()
  @Column()
  name!: string
  
  @Field(() => Int)
  @Column('int', { default: 0 })
  quantity!: number

  @Field(() => String)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string
}