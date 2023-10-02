import { Body, Delete, Get, Param, Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AboutCardsService } from 'src/about/core/application/projects.service';
import { CreateAboutCard, UpdateAboutCardDto } from 'src/about/core/dto/projects.dto';
import { IAboutCard } from 'src/about/core/interface/projects.inteface';

@Controller('about')
export class AboutController {
    constructor(private readonly aboutService: AboutCardsService) {}

    @Get()
    async getAllCards(): Promise<IAboutCard[]> {
        return this.aboutService.getAllCard();
    }

    @Post()
    async createCard(@Body() createCardDto: CreateAboutCard): Promise<IAboutCard> {
        return this.aboutService.createCard(createCardDto);
    }

    @Put(':id')
    async updateCard(@Param('id') id: string, @Body() updateAboutCardDto: UpdateAboutCardDto): Promise<void> {
        await this.aboutService.updateBook(id, updateAboutCardDto);
    }

    @Delete(':id')
    async deleteCard(@Param('id') id: string): Promise<void> {
        await this.aboutService.deleteCard(id);
    }
}
