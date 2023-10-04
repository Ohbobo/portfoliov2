import { Module } from "@nestjs/common";
import { AboutController } from "../adapters/primary/projects.controller";
import { InMemoryAboutCards } from "../adapters/secondary/inMemory/projects.inMemory";
import { AboutCardsService } from "../core/application/projects.service";
import { IAboutCardsRepository } from "../core/repository/projects.repository";

@Module({
    controllers: [AboutController],
    providers: [
        { provide: AboutCardsService, useFactory: (repository: IAboutCardsRepository) => new AboutCardsService(repository), inject: ['ABOUT_REPOSITORY'] },
        { provide: 'ABOUT_REPOSITORY', useClass: InMemoryAboutCards }
    ]
})

export class AboutCardsModule {}