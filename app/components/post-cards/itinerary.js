import Component from '@ember/component';
import RSVP from 'rsvp';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  init() {
    this._super();
    this.store.query('event', {
      filter: {
        id: this.payload.eventIds
      },
      include: 'guests,venue'
    }).then((events) => {
      if (this.isDestroyed) return;
      this.set('events', events.sortBy('startsAt'));
    });
  }
});
