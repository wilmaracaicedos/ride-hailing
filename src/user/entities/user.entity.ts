import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Array })
  type: Array<string>;
}

export const UserSchema = SchemaFactory.createForClass(User);
