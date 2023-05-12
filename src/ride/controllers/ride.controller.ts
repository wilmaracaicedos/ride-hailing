import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { CarRider } from '../car-rider';
import { Operation } from '../operation';
import { Response } from 'express';

@Controller('ride')
export class RideController {
  constructor(private carRider: CarRider) {}

  @Get('assign-driver')
  async getAssignDriver(@Res() res: Response) {
    const carRider = this.carRider;
    const operation = new Operation(carRider);
    const data = await operation.assingADriver();

    return res.status(HttpStatus.OK).json({
      status: 'success',
      data,
    });
  }
}
