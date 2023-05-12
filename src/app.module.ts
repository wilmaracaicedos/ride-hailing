import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RideModule } from './ride/ride.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [RideModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
