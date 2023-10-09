import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { IAdmin } from 'src/admin/core/interface/admin.interface';
import { IAdminRepository } from 'src/admin/core/repository/admin.repository';
import { AdminDto } from 'src/admin/core/dto/admin.dto';
import { AdminService } from 'src/admin/core/application/admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    @Post('login')
    async login(@Body() admindto: AdminDto): Promise<void> {
        const { email, password } = admindto;
        const admin = await this.adminService.login(email, password);

        if(!admin){
            throw new UnauthorizedException('invalide');
        }
    }
}