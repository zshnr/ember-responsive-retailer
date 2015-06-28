import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('product');
  },
  actions: {
    addToCart: function(product) {
      console.log('I work');
      console.log(product.get('name'));
    }
  }
});
