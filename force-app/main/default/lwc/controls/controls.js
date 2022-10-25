import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    handleAdd() {
        this.dispatchEvent(new CustomEvent('addd'));
      }
      handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
      }

      
}