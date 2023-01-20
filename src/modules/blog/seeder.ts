import { MongooseModule } from '@nestjs/mongoose'
import { seeder } from 'nestjs-seeder'
import { Blog, BlogSchema } from './entities/blog.entity'
import { BlogSeeder } from './blog.seeder'

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest_search'),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
}).run([BlogSeeder])
