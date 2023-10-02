import { Module } from '@nestjs/common';
import { AboutCardsModule } from './about/module/projects.module';

@Module({
  imports: [AboutCardsModule],
})
export class AppModule {}
