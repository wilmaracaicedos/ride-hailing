import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getDrivers(params) {
    const type: string = params.type;
    const pipeline: any[] = [];
    pipeline.push({
      $match: {
        type,
      },
    });

    return this.userModel.aggregate(pipeline).exec();
  }
}
