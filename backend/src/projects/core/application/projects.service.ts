import { IProjectsRepository } from "../repository/projects.repository";
import { IProjectCard } from "../interface/projects.interface";
import { ProjectDto } from "../dto/projects.dto";

export class ProjectsService {
    constructor(private readonly projectsRepository: IProjectsRepository) {}

    async getAllProjects(): Promise<IProjectCard[]> {
        return this.projectsRepository.getAllProjects()
    }

    async getOneProject(id: string): Promise<IProjectCard> {
        return this.projectsRepository.findById(id);
    }

    async createProject(createProjectDto: ProjectDto): Promise<IProjectCard> {
        const newProject : IProjectCard = {
            id: "1",
            ...createProjectDto,
        }
        const createProject = await this.projectsRepository.createProject(newProject)
        return createProject;
    }

    async updateProject(id: string, updateProjectDto: ProjectDto): Promise<IProjectCard> {
        const findProjectById = await this.projectsRepository.findById(id);
        if(!findProjectById){
            throw new Error('Projet introuvable');
        }

        const updatedProject = { ...findProjectById, ...updateProjectDto };
        return updatedProject;
    }

    async deleteProject(id: string): Promise<void> {
        const findProjectById = await this.projectsRepository.findById(id);
        await this.projectsRepository.deleteProject(id);
    }
}