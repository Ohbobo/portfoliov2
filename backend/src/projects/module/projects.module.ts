import { Module } from "@nestjs/common";
import { ProjectController } from "../adapters/primary/projects.controller";
import { ProjectsService } from "../core/application/projects.service";
import { IProjectsRepository } from "../core/repository/projects.repository";
import { InMemoryProjects } from "../adapters/secondary/inMemory/projects.inMemory";
import { AdminModule } from "src/admin/module/admin.module";

@Module({
    imports: [AdminModule],
    controllers: [ProjectController],
    providers: [
        { provide: ProjectsService, useFactory: (repository: IProjectsRepository) => new ProjectsService(repository), inject: ['PROJECTS_REPOSITORY'] },
        { provide: 'PROJECTS_REPOSITORY', useClass: InMemoryProjects }
    ]
})

export class ProjectsModule {}