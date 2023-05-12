import { Inject } from '@nestjs/common';
import { IMethod } from './interfaces/imethod.interface';
import { MethodService } from './services/method.service';

export class Card implements IMethod {
  constructor(@Inject(MethodService) private methodService: MethodService) {}

  create(payload) {
    return this.methodService.create(payload);
  }
}
