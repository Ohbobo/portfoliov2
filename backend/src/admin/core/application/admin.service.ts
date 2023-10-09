import { IAdminRepository } from "../repository/admin.repository";
import { ResposonseAdminDto } from "../dto/admin.dto";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as dotven from 'dotenv';

dotven.config();

export class AdminService {
    constructor(private readonly adminRepository: IAdminRepository) {}

    async login(email: string, password: string): Promise<ResposonseAdminDto | null> {
        const adminUser = await this.adminRepository.getUserByEmail(email);
        const passwordMatch = await bcrypt.compare(password, adminUser.password);

        if(!adminUser || !passwordMatch){
            return null;
        }

        const token = jwt.sign({ userId: adminUser.adminId }, process.env.JWT_KEY, { expiresIn: '24h' });
        return { adminId: adminUser.adminId, token }
    }
}
