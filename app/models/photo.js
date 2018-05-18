import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  url: attr('string'),
  width: attr('number'),
  height: attr('number'),
  tags: attr(),
  title: attr('string'),
  caption: attr('string')
});
