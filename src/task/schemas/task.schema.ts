import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  owner: string;

  @Prop()
  is_finished: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
