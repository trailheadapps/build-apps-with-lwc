import { LightningElement, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";
import { registerListener, unregisterAllListeners } from "c/pubsub";
export default class BearMap extends LightningElement {
  mapMarkers = [];
  @wire(CurrentPageReference) pageRef; // Required by pubsub
  connectedCallback() {
    // subscribe to bearListUpdate event
    registerListener("bearListUpdate", this.handleBearListUpdate, this);
  }
  disconnectedCallback() {
    // unsubscribe from bearListUpdate event
    unregisterAllListeners(this);
  }
  handleBearListUpdate(bears) {
    this.mapMarkers = bears.map(bear => {
      const Latitude = bear.Location__Latitude__s;
      const Longitude = bear.Location__Longitude__s;
      return {
        location: { Latitude, Longitude },
        title: bear.Name,
        description: `Coords: ${Latitude}, ${Longitude}`,
        icon: "utility:animal_and_nature"
      };
    });
  }
}
