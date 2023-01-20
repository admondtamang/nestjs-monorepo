import { IsString } from 'class-validator'

export class CreateBlog {
  @IsString()
  title: string
  @IsString()
  description: string
  @IsString()
  image: string
  @IsString()
  content: string
}
