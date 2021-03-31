import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Import Bear object fields
import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';
const bearFields = [SUPERVISOR_FIELD];
export default class BearSupervisor extends LightningElement {
	@api recordId; // Bear Id
	bear;
	mapMarkers = [];
	@wire(getRecord, { recordId: '$recordId', fields: bearFields })
	loadBear(result) {
		console.log("supervisor: ", result)
        this.bear = result;
		const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
		const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
		// Transform bear data into map markers
		this.mapMarkers = [{
			location: { Latitude, Longitude },
			title: this.name,
			description: `Coords: ${Latitude}, ${Longitude}`
		}];
    }
	get supervisorId() {
		return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
	}
}