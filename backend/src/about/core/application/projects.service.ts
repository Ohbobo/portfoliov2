import { IAboutCard } from "../interface/projects.inteface";
import { CreateAboutCard, UpdateAboutCardDto } from "../dto/projects.dto";
import { IAboutCardsRepository } from "../repository/projects.repository";

export class AboutCardsService {
    constructor(private readonly aboutCardsRepository: IAboutCardsRepository) {}

    async getAllCard(): Promise<IAboutCard[]> {
        return this.aboutCardsRepository.getAllCard();
    }

    async createCard(createCardDto: CreateAboutCard): Promise<IAboutCard> {
        const newCard: IAboutCard = {
            id: "1",
            ...createCardDto
        }
        const createCard = await this.aboutCardsRepository.createCard(newCard);
        return createCard;
    }

    async updateBook(id: string, updateAboutCardDto: UpdateAboutCardDto): Promise<void> {
        const findCardById = await this.aboutCardsRepository.findById(id);
        const updatedCard = { ...findCardById, ...updateAboutCardDto };

        await this.aboutCardsRepository.updateCard(updatedCard);
    }

    async deleteCard(id: string): Promise<void> {
        const findCardById = await this.aboutCardsRepository.findById(id);
        await this.aboutCardsRepository.deleteCard(id);
    }
}