import { Injectable } from '@nestjs/common';

@Injectable()
export class NameService {
  getHello(): string {
    return 'Hello World!';
  }
}
