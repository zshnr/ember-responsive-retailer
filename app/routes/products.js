import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
      return this.store.find('product');
  },
  actions: {
      addToCart: function(product) {
        console.log('adding to cart');
        product.incrementProperty('quantityInCart');
        product.decrementProperty('quantityInStock');
        product.save();
      }
  }
});
