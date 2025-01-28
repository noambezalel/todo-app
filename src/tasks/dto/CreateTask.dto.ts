export class CreateTaskDto {
  readonly name: string;
  readonly description: string;
  readonly owner: string;
  readonly is_finished: boolean;
}
