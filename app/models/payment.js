import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  email: attr('string'),
  stripeToken: attr('string'),
  tickets: hasMany('ticket')
});
