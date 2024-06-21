import { IsNumber, IsPositive, IsString, Min, MinLength, isPositive } from "class-validator";

export class CreatePokemonDto {

    @IsNumber()
    @Min(1)
    @IsPositive()
    no: number;

    @IsString()
    @MinLength(1)
    name: string
}
