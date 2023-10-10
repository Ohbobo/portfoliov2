import type { IAboutEntities } from "../interface/interface";
import type { IAboutRepository } from "../repository/about.repository";

export class AboutService {
    constructor(private readonly aboutRepository: IAboutRepository) {}

    async getAboutData(): Promise<IAboutEntities[]> {
        return this.aboutRepository.getAboutData();
    }
}