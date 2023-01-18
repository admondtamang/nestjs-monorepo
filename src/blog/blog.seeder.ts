import { InjectModel } from '@nestjs/mongoose'
import { Blog, BlogDocument } from './entities/blog.entity'
import { Model } from 'mongoose'
import { DataFactory } from 'nestjs-seeder'

export class BlogSeeder {
  constructor(@InjectModel(Blog.name) private readonly blogModel: Model<BlogDocument>) {}

  drop(): Promise<any> {
    return this.blogModel.deleteMany({}) as any
  }

  seed(): Promise<any> {
    const blogs: any = DataFactory.createForClass(Blog).generate(200)
    return this.blogModel.insertMany(blogs)
  }
}
