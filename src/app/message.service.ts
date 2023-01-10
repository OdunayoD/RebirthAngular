import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  age: number = 9;

  add(message: string) {
    this.messages.push(message);
  }

  isEven(num: number) : boolean{

    if(num % 2 == 0){
      return true;
    }

    return false;
  }

  clear() {
    this.messages = [];
  }
}