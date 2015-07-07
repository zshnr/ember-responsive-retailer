import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return store.find('product').then(function() {
        return store.filter('product', function(product) {
          return product.get('isInCart');
        });
    });
  },
  actions: {
    removeFromCart: function(product) {
      console.log('removing from cart');
      product.decrementProperty('quantityInCart');
      product.incrementProperty('quantityInStock');
      product.save();
    }
  }
});
