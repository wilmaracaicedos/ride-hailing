import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { CarRider } from '../car-rider';
import { Operation } from '../operation';
import { Response } from 'express';

@Controller('ride')
export class RideController {
  constructor(private carRider: CarRider) {}

  @Get('assign-driver')
  async getAssignDriver(@Query() params, @Res() res: Response) {
    const carRider = this.carRider;
    const operation = new Operation(carRider);
    const parameters = {
      latitude: params.latitude,
      longitude: params.longitude,
    };
    const data = await operation.assingADriver(parameters);

    return res.status(HttpStatus.OK).json({
      status: 'success',
      data,
    });
  }
}
