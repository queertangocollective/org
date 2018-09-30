import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  description: attr('string'),
  sku: attr('string'),
  cost: attr('number'),
  quantity: attr('number'),
  currency: attr('string'),
  validFrom: attr('date'),
  validTo: attr('date'),
  ticketedEvents: hasMany('ticketed-event'),
  events: computed('ticketedEvents.@each.events', function () {
    return this.get('ticketedEvents').mapBy('event');
  })
});
