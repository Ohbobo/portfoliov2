import { Module } from "@nestjs/common";
import { ProjectController } from "../adapters/primary/projects.controller";
import { InMemoryAboutCards } from "../adapters/secondary/inMemory/projects.inMemory";
import { AboutCardsService } from "../core/application/projects.service";
import { IAboutCardsRepository } from "../core/repository/projects.repository";

@Module({
    controllers: [ProjectController],
    providers: [
        { provide: AboutCardsService, useFactory: (repository: IAboutCardsRepository) => new AboutCardsService(repository), inject: ['PROJECT_REPOSITORY'] },
        { provide: 'PROJECT_REPOSITORY', useClass: InMemoryAboutCards }
    ]
})

export class AboutCardsModule {}