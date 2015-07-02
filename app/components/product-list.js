import Ember from 'ember';

export default Ember.Component.extend({
  noStock: function() {
    return this.get('product').get('quantityInStock') === 0;
  }.property('product.quantityInStock'),
  actions: {
    addToCart: function(product) {
      this.sendAction('addToCart', product);
    },
    removeFromCart: function(product) {
      this.sendAction('removeFromCart', product);
    }
  }
});
