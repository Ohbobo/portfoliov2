import { Injectable } from '@nestjs/common'
import { CreateAboutCard, UpdateAboutCardDto } from 'src/about/core/dto/projects.dto';
import { IAboutCard } from 'src/about/core/interface/projects.inteface';
import { IAboutCardsRepository } from 'src/about/core/repository/projects.repository';


@Injectable()
export class InMemoryAboutCards implements IAboutCardsRepository {
    private readonly projects: IAboutCard[] = [];

    async getAllCard(): Promise<IAboutCard[]> {
        return this.projects;
    }

    async findById(id: string): Promise<IAboutCard> {
        return this.projects.find(p => p.id === id);
    }

    async createCard(createCardDto: CreateAboutCard): Promise<IAboutCard> {
        const newCard = {id: "1", ...createCardDto};
        this.projects.push(newCard);
        return newCard;
    }

    async updateCard(project: IAboutCard): Promise<void> {
        const index = this.projects.findIndex(p => p.id === project.id);
        if(index === -1) {
            return undefined;
        }
        this.projects[index] = project;
    }

    async deleteCard(id: string): Promise<void> {
        const index = this.projects.findIndex(p => p.id === id);

        if(index !== -1) {
            this.projects.splice(index, 1);
        }
    }
}