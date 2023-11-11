import { IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    label: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}