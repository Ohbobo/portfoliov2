import { IAboutCard } from "../interface/projects.inteface";
import { CreateAboutCard, UpdateAboutCardDto } from "../dto/projects.dto";

export interface IAboutCardsRepository {
    getAllCard(): Promise<IAboutCard[]>;
    createCard(createCardDto: CreateAboutCard): Promise<IAboutCard>;
    findById(id: string): Promise<IAboutCard>;
    updateCard(projects: IAboutCard): Promise<void>;
    deleteCard(id: string): Promise<void>;
}