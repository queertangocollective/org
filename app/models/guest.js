import DS from 'ember-data';
import Model from 'ember-data/model';

const { attr, belongsTo } = DS;

export default Model.extend({
  event: belongsTo('event'),
  person: belongsTo('person'),
  role: attr('string')
});
