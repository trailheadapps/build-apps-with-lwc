import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import BEAR_LIST_UPDATE_MESSAGE from '@salesforce/messageChannel/BearListUpdate__c';
export default class BearMap extends LightningElement {
  mapMarkers = [];
  subscription = null;
  @wire(MessageContext)
  messageContext;
  connectedCallback() {
    // Subscribe to BearListUpdate__c message
    this.subscription = subscribe(
        this.messageContext,
        BEAR_LIST_UPDATE_MESSAGE,
        (message) => {
            this.handleBearListUpdate(message);
        });
  }
  disconnectedCallback() {
    // Unsubscribe from BearListUpdate__c message
    unsubscribe(this.subscription);
    this.subscription = null;
  }
  handleBearListUpdate(message) {
    this.mapMarkers = message.bears.map(bear => {
      const Latitude = bear.Location__Latitude__s;
      const Longitude = bear.Location__Longitude__s;
      return {
        location: { Latitude, Longitude },
        title: bear.Name,
        description: `Coords: ${Latitude}, ${Longitude}`,
        icon: 'utility:animal_and_nature'
      };
    });
  }
}