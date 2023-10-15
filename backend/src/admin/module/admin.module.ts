import { MiddlewareConsumer, Module, RequestMethod, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { AdminService } from "../core/application/admin.service";
import { IAdminRepository } from "../core/repository/admin.repository";
import { InMemoryAdmin } from "../adapters/secondary/inMemory/admin.inMemory";
import { AdminController } from "../adapters/primary/admin.controller";
import { AuthMiddleware } from "../adapters/secondary/middleware/auth.middleware";

@Module({
    controllers: [AdminController],
    providers: [
        {
            provide: AdminService, 
            useFactory: (repository: IAdminRepository) => new AdminService(repository), inject: ['ADMIN_REPOSITORY']
        },
        {
            provide: 'ADMIN_REPOSITORY',
            useClass: InMemoryAdmin,
        }
    ],
})

export class AdminModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(AuthMiddleware)
        .forRoutes({ path: '/dashboard', method: RequestMethod.ALL })
    }
}