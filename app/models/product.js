import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  quantityInStock: DS.attr('number'),
  imageUrl: DS.attr('string'),
  quantityInCart: DS.attr('number'),
  noStock: Ember.computed('quantityInStock', function() {
    return this.get('quantityInStock') === 0;
  }),
  subTotal: Ember.computed('price', 'quantityInCart', function() {
    return this.get('price') * this.get('quantityInCart');
  }),
  isInCart: Ember.computed.gt('quantityInCart', 0)
});
