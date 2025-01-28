import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly owner: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly is_finished: boolean;
}
