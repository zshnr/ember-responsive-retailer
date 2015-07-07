import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeFromCart: function(product) {
      this.sendAction('removeFromCart', product);
    }
  }
});
