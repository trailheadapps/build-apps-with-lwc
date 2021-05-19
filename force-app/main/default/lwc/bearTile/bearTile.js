import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class BearTile extends LightningElement {
	@api bear;
	appResources = {
		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	};
    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('bearview', {
            detail: this.bear.Id
        });
        this.dispatchEvent(selectEvent);
    }
}