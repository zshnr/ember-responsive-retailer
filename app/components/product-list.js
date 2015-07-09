import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart: function(product) {
      this.sendAction('addToCart', product);
    }
  }
});
