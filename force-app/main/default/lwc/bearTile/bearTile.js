import { loadStyle } from "lightning/platformResourceLoader";
import { LightningElement, api } from "lwc";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
export default class BearTile extends LightningElement {
  @api bear;

  handleOpenRecordClick() {
    const selectEvent = new CustomEvent("bearview", {
      detail: this.bear.Id
    });
    this.dispatchEvent(selectEvent);
  }
}
