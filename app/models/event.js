import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string'),
  description: attr('string'),
  guests: hasMany('guest'),
  venue: belongsTo('venue'),
  startsAt: attr('date'),
  endsAt: attr('date'),

  bylines: computed('guests', function () {
    let bylines = {};
    this.guests.forEach((guest) => {
      if (bylines[guest.role] == null) {
        bylines[guest.role] = [];
      }
      bylines[guest.role].push(guest.person);
    });
    return bylines;
  }),

  mobiledoc: computed('description', function () {
    return JSON.parse(this.description);
  })
});
