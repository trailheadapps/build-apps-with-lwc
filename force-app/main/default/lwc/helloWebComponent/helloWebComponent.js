import { LightningElement, track } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    
    // This is used to make the property reactive. 
    // In other words, whenever the value of greeting changes, the component’s HTML template is automatically refreshed.
    @track

    // This declares and initializes a greeting property
    greeting = 'Trailblazer';

    // This defines a function that captures a value from an event 
    // (input change event coming from the input field) and assigns it to the greeting property.
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }


    // This defines two getter functions that calculate expression values. 
    // The framework automatically reevaluates expression functions if they include references to component properties and the value of those properties changes.
    // Just like properties decorated with @track, expressions are reactive. 
    // If the expression value changes, the component is refreshed.
    // In our component, currentDate will never be refreshed because it does not rely on a component property. 
    // However, capitalizedGreeting will be reevaluated if greeting changes.
    get currentDate() {
        return new Date().toDateString();
    }
    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }

}