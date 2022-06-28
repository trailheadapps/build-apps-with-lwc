   import { LightningElement } from 'lwc';

export default class Numerator extends LightningElement {
   counter = 0;
   handleIncrement() {
     this.counter++;
   }
   handleDecrement() {
     this.counter--;
   }
   handleMultiply(event) {
      const factor = event.detail;
      this.counter *= factor;
    }
}