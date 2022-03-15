import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = 'Trailblazer';
    currentDate = new Date().toDateString();

    get capitalizedGreeting(){
        return `Hello I Love You ${this.greeting.toUpperCase()}!!`;
    }

    handleGreetingChange(event){
        this.greeting = event.target.value;
    }
}