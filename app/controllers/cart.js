import Ember from 'ember';

export default Ember.Controller.extend({
  cartTotal: Ember.computed('model.@each.subTotal', function() {
    return this.model.reduce(function(subTotal, product) {
      return subTotal + product.get('subTotal');
    }, 0);
  })
});
