import { loadStyle } from "lightning/platformResourceLoader";
import { NavigationMixin, CurrentPageReference } from "lightning/navigation";
import { fireEvent } from "c/pubsub";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
import { LightningElement, wire } from "lwc";
BearController.searchBears(searchTerm);
import searchBears from "@salesforce/apex/BearController.searchBears";
export default class BearListNav extends NavigationMixin(LightningElement) {
  searchTerm = "";
  bears;
  @wire(CurrentPageReference) pageRef;
  @wire(searchBears, { searchTerm: "$searchTerm" })
  loadBears(result) {
    this.bears = result;
    if (result.data) {
      fireEvent(this.pageRef, "bearListUpdate", result.data);
    }
  }

  connectedCallback() {
    loadStyle(this, ursusResources + "/style.css");
  }
  handleSearchTermChange(event) {
    // Debouncing this method: do not update the reactive property as
    // long as this function is being called within a delay of 300 ms.
    // This is to avoid a very large number of Apex method calls.
    window.clearTimeout(this.delayTimeout);
    const searchTerm = event.target.value;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      this.searchTerm = searchTerm;
    }, 300);
  }
  get hasResults() {
    return this.bears.data.length > 0;
  }
  handleBearView(event) {
    // Get bear record id from bearview event
    const bearId = event.detail;
    // Navigate to bear record page
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: bearId,
        objectApiName: "Bear__c",
        actionName: "view"
      }
    });
  }
}
/**
import { LightningElement, wire } from "lwc";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
 */
/* BearController.searchBears(searchTerm) Apex method 
import searchBears from "@salesforce/apex/BearController.searchBears";
export default class BearList extends LightningElement {
  searchTerm = "";
  @wire(searchBears, { searchTerm: "$searchTerm" })
  bears;
  appResources = {
    bearSilhouette: ursusResources + "/img/standing-bear-silhouette.png"
  };
  handleSearchTermChange(event) {
    // Debouncing this method: do not update the reactive property as
    // long as this function is being called within a delay of 300 ms.
    // This is to avoid a very large number of Apex method calls.
    window.clearTimeout(this.delayTimeout);
    const searchTerm = event.target.value;
    this.delayTimeout = setTimeout(() => {
      this.searchTerm = searchTerm;
    }, 300);
  }
  get hasResults() {
    return this.bears.data.length > 0;
  }
}
*/

//wired Apex
/** BearController.getAllBears() Apex method */
/**
 import { LightningElement, wire } from "lwc";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
export default class BearList extends LightningElement {
  @wire(getAllBears) bears;
  appResources = {
    bearSilhouette: ursusResources + "/img/standing-bear-silhouette.png"
  };
}
*/

// imperative Apex
/*  
import { LightningElement } from "lwc";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
/** BearController.getAllBears() Apex method */
/*
import getAllBears from "@salesforce/apex/BearController.getAllBears";
export default class BearList extends LightningElement {
  bears;
  error;
  appResources = {
    bearSilhouette: ursusResources + "/img/standing-bear-silhouette.png"
  };
  connectedCallback() {
    this.loadBears();
  }
  loadBears() {
    getAllBears()
      .then(result => {
        this.bears = result;
      })
      .catch(error => {
        this.error = error;
      });
  }
}
*/
