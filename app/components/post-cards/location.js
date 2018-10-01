import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  init() {
    this._super();
    this.store.findRecord('location', this.payload.locationId).then((location) => {
      if (this.isDestroyed) return;
      this.set('location', location);
    });
  }
});
