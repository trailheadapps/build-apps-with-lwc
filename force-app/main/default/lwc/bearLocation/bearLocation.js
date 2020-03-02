import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
const fields = [
  "Bear__c.Name",
  "Bear__c.Location__Latitude__s",
  "Bear__c.Location__Longitude__s"
];
export default class BearLocation extends LightningElement {
  @api recordId;
  name;
  mapMarkers = [];
  @wire(getRecord, { recordId: "$recordId", fields })
  loadBear({ error, data }) {
    if (error) {
      // TODO: handle error
    } else if (data) {
      // Get Bear data
      this.name = data.fields.Name.value;
      const Latitude = data.fields.Location__Latitude__s.value;
      const Longitude = data.fields.Location__Longitude__s.value;
      // Transform bear data into map markers
      this.mapMarkers = [
        {
          location: { Latitude, Longitude },
          title: this.name,
          description: `Coords: ${Latitude}, ${Longitude}`
        }
      ];
    }
  }
  get cardTitle() {
    return this.name ? `${this.name}'s location` : "Bear location";
  }
}
