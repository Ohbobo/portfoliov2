import { Body, Delete, Get, NotFoundException, Param, Put, UploadedFile, UseInterceptors, Req, BadRequestException } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ProjectsService } from 'src/projects/core/application/projects.service';
import { ProjectDto } from 'src/projects/core/dto/projects.dto';
import { IProjectCard } from 'src/projects/core/interface/projects.interface';

@Controller('projects')
export class ProjectController{
    constructor(private readonly projectsService : ProjectsService) {}

    @Get()
    async getAllProjects(): Promise<IProjectCard[]> {
        return this.projectsService.getAllProjects();
    }

    @Get(':id')
    async getOneProjects(@Param('id') id: string): Promise<IProjectCard> {
        const getProjectById = await this.projectsService.getOneProject(id);

        if(!getProjectById) {
            throw new NotFoundException('projet non trouvé')
        }

        return getProjectById;
    }

    @Post()
        async createProject(@Body() createProjectDto: ProjectDto): Promise<IProjectCard> {
            try {
                const newProject = await this.projectsService.createProject(createProjectDto);
                console.log(newProject)
                return newProject;
            } catch (error) {
                throw new BadRequestException("Erreur lors du redimensionnement de l'image");
            }
    }


    @Put(':id')
    async updateProject(@Param('id') id: string, @Body() updateDto: ProjectDto): Promise<void> {
        await this.projectsService.updateProject(id, updateDto)
    }

    @Delete(':id')
    async deleteProject(@Param('id') id: string): Promise<void> {
        await this.projectsService.deleteProject(id);
    }
}
