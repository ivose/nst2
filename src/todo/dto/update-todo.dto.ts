import { IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
    @IsNotEmpty()
    @IsString()
    label?: string;

    @IsBoolean()
    @IsOptional()
    done: boolean;
}