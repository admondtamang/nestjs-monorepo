import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Factory } from 'nestjs-seeder'
import { Document } from 'mongoose'

export type BlogDocument = Blog & Document

@Schema()
export class Blog {
  @Factory((faker) => faker.lorem.words(2))
  @Prop({
    required: false,
    type: String,
  })
  title: string

  @Factory((faker) => faker.lorem.words(8))
  @Prop()
  description: string

  @Factory((faker) => faker.image.imageUrl())
  @Prop()
  image: string

  @Factory((faker) => faker.lorem.words(200))
  @Prop({
    required: false,
    type: String,
  })
  content: string
}

export const BlogSchema = SchemaFactory.createForClass(Blog)
