import { IRider } from './interfaces/irider.interface';

export class Operation {
  protected rider: IRider;

  constructor(rider: IRider) {
    this.rider = rider;
  }

  assingADriver(params) {
    return this.rider.assignADriver(params);
  }
}
