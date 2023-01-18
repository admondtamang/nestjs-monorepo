import { Body, Controller, Get, Param, Post, Req, ValidationPipe } from '@nestjs/common'
import { BlogService } from './blog.service'
import { Request, query } from 'express'
import { CreateBlog } from './dto/blog.dto'

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Post()
  create(@Body(ValidationPipe) createBlog: CreateBlog) {
    return this.blogService.create(createBlog)
  }

  @Get('all')
  async all() {
    return this.blogService.find({}).exec()
  }

  @Get('/:id')
  async one() {
    return this.blogService.findOne({ name: '' })
  }

  @Get('paginate')
  async paginate(@Req() req: Request) {
    let options = {}

    const searchString = req.query.s
    if (searchString) {
      options = {
        $or: [
          { title: new RegExp(searchString.toString(), 'i') },
          { description: new RegExp(searchString.toString(), 'i') },
        ],
      }
    }

    const query = this.blogService.find(options)

    if (req.query.sort) {
      query.sort(req.query.sort as string)
    }

    const page = parseInt(req.query.page as any) || 1
    const limit = parseInt(req.query.limit as any) || 10
    const total = await this.blogService.count(options)
    const offset = (page - 1) * limit

    const data = await query.skip(offset).limit(limit).find(options).exec()

    return { data, total, limit }
  }
}
