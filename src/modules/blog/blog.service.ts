import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Blog, BlogDocument } from './entities/blog.entity'
import { Model } from 'mongoose'

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private readonly blogModel: Model<BlogDocument>) {}

  find(options) {
    return this.blogModel.find(options)
  }

  findOne(options) {
    return this.blogModel.findOne(options)
  }
  create(options) {
    return this.blogModel.create(options)
  }

  count(options) {
    return this.blogModel.count(options).exec()
  }
}
