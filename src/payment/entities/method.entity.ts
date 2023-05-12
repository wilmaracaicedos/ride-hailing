import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Method extends Document {
  @Prop({ type: Array })
  type: string;

  @Prop({ type: String })
  card_holder: string;

  @Prop({ type: String })
  brand: string;

  @Prop({ type: String })
  number: string;

  @Prop({ type: String })
  exp_year: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const MethodSchema = SchemaFactory.createForClass(Method);
