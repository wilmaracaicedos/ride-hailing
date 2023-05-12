import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateMethodDto } from '../dtos/method.dtos';
import { Card } from '../card';
import { Source } from '../source';

@Controller('payment')
export class PaymentController {
  constructor(private card: Card) {}

  @Post('payment_method')
  async save(@Res() res, @Body() payload: CreateMethodDto) {
    const method = this.card;
    const source = new Source(method);
    const saved = await source.create(payload);

    if (saved) {
      return res.status(HttpStatus.CREATED).json({
        status: 'created',
        data: saved,
      });
    }
  }
}
