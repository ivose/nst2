import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { PrismaService } from "../prisma/prisma.service";

@Injectable()

export class TodoService {
    constructor(private readonly prismaService: PrismaService) {}
    async create(createTodoDto: CreateTodoDto) {
        return await this.prismaService.todo.create({
            data: createTodoDto
        })
    }

    findAll() {
        return this.prismaService.todo.findMany()
        //return "saadab kõik välja"
    }

    findOne(id: string) {
        return "tagastab esimese ettejuhtuva"
    }

    updateOne(id:string, updateTodoDto:UpdateTodoDto) {
        return `uuendatakse kirjet numbriga ${id}`
    }

    remove(id:string) {
        return `kustutaktakse ${id}`
    }


}