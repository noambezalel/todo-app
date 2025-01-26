import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from 'src/task/schemas/task.schema';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  username: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  tasks: Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);
