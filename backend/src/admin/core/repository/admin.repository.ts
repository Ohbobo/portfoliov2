import { AdminDto } from "../dto/admin.dto";
import { IAdmin } from "../interface/admin.interface";

export interface IAdminRepository {
    getUserByEmail(email: string): Promise<IAdmin>;
}