import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
      return this.store.findAll('product');
  },
  actions: {
      addToCart: function(product) {
      console.log('adding to cart');
      product.incrementProperty('quantityInCart');
      product.decrementProperty('quantityInStock');
      product.save();
    },
    removeFromCart: function(product) {
      console.log('removing from cart');
      product.decrementProperty('quantityInCart');
      product.incrementProperty('quantityInStock');
      product.save();
    }
  }
});
