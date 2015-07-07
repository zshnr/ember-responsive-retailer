import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return store.find('product').then(function() {
        return store.filter('product', function(product) {
          return product.get('isInCart');
        });
    });
  }
});
