import { IMethod } from './interfaces/imethod.interface';

export class Source {
  protected method: IMethod;

  constructor(method: IMethod) {
    this.method = method;
  }

  create(params) {
    return this.method.create(params);
  }
}
