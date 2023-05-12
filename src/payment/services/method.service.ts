import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Method } from '../entities/method.entity';
import { Model } from 'mongoose';
import { CreateMethodDto } from '../dtos/method.dtos';

@Injectable()
export class MethodService {
  constructor(@InjectModel(Method.name) private methodModel: Model<Method>) {}

  create(data: CreateMethodDto) {
    const newMethod = new this.methodModel(data);
    return newMethod.save();
  }
}
