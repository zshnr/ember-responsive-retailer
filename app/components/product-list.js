import Ember from 'ember';

export default Ember.Component.extend({
  noStock: Ember.computed('quantityInStock', function() {
    return this.get('product').get('quantityInStock') === 0;
  }),
  actions: {
    addToCart: function(product) {
      this.sendAction('addToCart', product);
    }
  }
});
