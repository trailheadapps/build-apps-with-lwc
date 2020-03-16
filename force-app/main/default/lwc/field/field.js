import { LightningElement, track } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import Name_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";

export default class Fields extends LightningElement {
  accountId;
  name = "";
  phone = "";

  changehandlername(event) {
    this.accountId = undefined;
    this.name = event.target.value;
  }

  changehandlerphone(event) {
    this.accountId = undefined;
    this.phone = event.target.value;
  }

  //const field = event.target.name;
  // if (field === "firstname") {
  //   this.firstname = event.target.value;
  // } else if (field === "lastname") {
  //   this.lastname = event.target.value;
  // }

  createAccount() {
    const fields = {};
    fields[Name_FIELD.fieldApiName] = this.name;
    fields[PHONE_FIELD.fieldApiName] = this.phone;
    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

    console.log(recordInput);

    createRecord(recordInput)
      .then(account => {
        this.accountId = account.Id;

        console.log("sucess");

        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Account Created",
            variant: "success"
          })
        );
      })
      .catch(error => {
        console.log("fail");
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error",
            message: "Error has occored",
            variant: "error"
          })
        );
      });
  }
}
