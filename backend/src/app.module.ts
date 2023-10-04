import { Module } from '@nestjs/common';
import { AboutCardsModule } from './about/module/projects.module';
import { ProjectsModule } from './projects/module/projects.module';

@Module({
  imports: [
    AboutCardsModule,
    ProjectsModule,
  ],
})
export class AppModule {}
