import { LightningElement } from 'lwc';

export default class Numerator extends LightningElement {

    counter = 0;
    incrementarContador() {
      this.counter++;
    }
    decrementarContador() {
      this.counter--;
    }
}