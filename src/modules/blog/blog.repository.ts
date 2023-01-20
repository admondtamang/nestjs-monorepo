import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EntityRepository } from '@/database/entity.repository'

import { Blog, BlogDocument } from './entities/blog.entity'

@Injectable()
export class UsersRepository extends EntityRepository<BlogDocument> {
  constructor(@InjectModel(Blog.name) blogModel: Model<BlogDocument>) {
    super(blogModel)
  }
}
