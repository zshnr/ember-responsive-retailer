import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  quantityInStock: DS.attr('number'),
  imageUrl: DS.attr('string'),
  quantityInCart: DS.attr('number'),
  subTotal: Ember.computed('price', 'quantityInCart', function() {
    return this.get('price') * this.get('quantityInCart');
  }),
  isInCart: Ember.computed('quantityInCart', function() {
    if(this.get('quantityInCart') > 0) {
      return true;
    }
  })
});
