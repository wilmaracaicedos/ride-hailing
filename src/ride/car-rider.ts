import { Inject } from '@nestjs/common';
import { IRider } from './interfaces/irider.interface';
import { UserService } from '../user/services/user/user.service';

export class CarRider implements IRider {
  constructor(@Inject(UserService) private userService: UserService) {}

  async assignADriver() {
    const drivers = await this.userService.getDrivers({ type: 'driver' });

    return drivers;
  }

  startARide() {
    return 'start ride';
  }
}
