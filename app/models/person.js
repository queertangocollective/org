import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  email: attr('string'),
  biography: attr('string'),
  website: attr('string'),
  mobiledoc: computed('biography', function () {
    return JSON.parse(this.biography);
  })
});
