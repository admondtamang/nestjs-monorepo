import { Module } from '@nestjs/common'
import { BlogModule } from '@/modules/blog/blog.module'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from '@/modules/user/user.module'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://3.7.231.166/nest_search', {
      autoCreate: true,
    }),
    BlogModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
