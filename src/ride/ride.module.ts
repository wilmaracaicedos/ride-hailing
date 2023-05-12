import { Module } from '@nestjs/common';
import { RideController } from './controllers/ride.controller';
import { CarRider } from './car-rider';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [RideController],
  providers: [CarRider],
})
export class RideModule {}
