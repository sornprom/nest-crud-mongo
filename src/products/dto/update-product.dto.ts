import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    readonly name?: string
    
    @IsString()
    @IsOptional()
    readonly description?: string

    @IsString()
    @IsNumber()
    readonly price?: number
}
