import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import {TodoService} from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    findAll() {
        return "hello world todo controller"
        //return this.todoService.findAll()
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto) {
        return this.todoService.create(createTodoDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todoService.findOne(id)
    }
}