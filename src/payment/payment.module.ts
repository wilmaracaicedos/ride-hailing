import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/payment.controller';
import { MethodService } from './services/method.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Method, MethodSchema } from './entities/method.entity';
import { Card } from './card';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Method.name,
        schema: MethodSchema,
      },
    ]),
  ],
  controllers: [PaymentController],
  providers: [MethodService, Card],
})
export class PaymentModule {}
