import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  quantityInStock: DS.attr('number'),
  imageUrl: DS.attr('string')
});
