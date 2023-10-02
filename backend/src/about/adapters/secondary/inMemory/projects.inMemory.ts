import { Injectable } from '@nestjs/common'
import { CreateAboutCard, UpdateAboutCardDto } from 'src/about/core/dto/projects.dto';
import { IAboutCard } from 'src/about/core/interface/projects.inteface';
import { IAboutCardsRepository } from 'src/about/core/repository/projects.repository';


@Injectable()
export class InMemoryAboutCards implements IAboutCardsRepository {
    private readonly aboutCards: IAboutCard[] = [];

    async getAllCard(): Promise<IAboutCard[]> {
        return this.aboutCards;
    }

    async findById(id: string): Promise<IAboutCard> {
        return this.aboutCards.find(card => card.id === id);
    }

    async createCard(createCardDto: CreateAboutCard): Promise<IAboutCard> {
        const newCard = {id: "1", ...createCardDto};
        this.aboutCards.push(newCard);
        return newCard;
    }

    async updateCard(project: IAboutCard): Promise<void> {
        const index = this.aboutCards.findIndex(card => card.id === project.id);
        if(index === -1) {
            return undefined;
        }
        this.aboutCards[index] = project;
    }

    async deleteCard(id: string): Promise<void> {
        const index = this.aboutCards.findIndex(card => card.id === id);

        if(index !== -1) {
            this.aboutCards.splice(index, 1);
        }
    }
}