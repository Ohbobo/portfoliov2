import { Module } from '@nestjs/common';
import { AboutCardsModule } from './about/module/projects.module';
import { ProjectsModule } from './projects/module/projects.module';
import { AdminModule } from './admin/module/admin.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/images',
    }),
    AboutCardsModule,
    ProjectsModule,
    AdminModule,
  ],
})
export class AppModule {}
