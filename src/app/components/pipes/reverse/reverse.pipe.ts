import { Pipe, PipeTransform } from '@angular/core';
import {Message} from '../../../services/backend/messages/message.model';

@Pipe({ name: 'reverse' })

export class ReversePipe implements PipeTransform {
  transform(value: Message[]) {
    return value.slice().reverse();
  }
}
