import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  init() {
    this._super();
    this.store.findRecord('person', this.payload.personId).then((person) => {
      if (this.isDestroyed) return;
      this.set('person', person);
    });
  }
});
