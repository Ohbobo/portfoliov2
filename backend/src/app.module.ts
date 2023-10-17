import { Module } from '@nestjs/common';
import { AboutCardsModule } from './about/module/projects.module';
import { ProjectsModule } from './projects/module/projects.module';
import { AdminModule } from './admin/module/admin.module';

@Module({
  imports: [
    AboutCardsModule,
    ProjectsModule,
    AdminModule,
  ],
})
export class AppModule {}
