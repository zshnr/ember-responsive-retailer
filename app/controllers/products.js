import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToCart: function(product) {
      this.get('cart').add(product);
    }
  }
});
