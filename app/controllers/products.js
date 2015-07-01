import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToCart(product) {
      this.cart.pushItem(product);
    }
  }
});
