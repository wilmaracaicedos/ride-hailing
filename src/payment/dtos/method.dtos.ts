import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMethodDto {
  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly card_holder: string;

  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  readonly number: string;

  @IsString()
  readonly exp_year: string;
}
