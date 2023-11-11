import { Module } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoController } from "./todo.controller";
//import { PrismaService } from "src/prisma/prisma.service";
import { PrismaModule } from "src/prisma/prisma.module"; // Assuming this is the correct path


@Module({
    imports: [ PrismaModule ],
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule{}