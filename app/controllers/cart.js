import Ember from 'ember';

export default Ember.Controller.extend({
  cartTotal: Ember.computed('model.@each.subTotal', function() {
    return this.model.reduce(function(subTotal, product) {
      var total = subTotal + product.get('subTotal');
      return total;
    }, 0);
  }),
  footwearInCart: Ember.computed('model.@each.category', function() {
    return this.model.any(product => product.get('category').includes('Footwear'));
  }),
  discountAmount: 0,
  discountApplied: false,
  actions: {
    fivePoundVoucher: function() {
      if ((this.get('cartTotal') <= 50) && (this.get('discountApplied') === false)) {
        var discountTotal = this.get('cartTotal') - 5;
        this.set('discountAmount', 5);
        this.set('discountApplied', true);
        this.set('cartTotal', discountTotal);
        return this.get('discountTotal');
      }
    },
    tenPoundVoucher: function() {
      if ((this.get('cartTotal') >= 50) && (this.get('cartTotal') < 75) && (this.get('discountApplied') === false)) {
        var discountTotal = this.get('cartTotal') - 10;
        this.set('discountAmount', 10);
        this.set('discountApplied', true);
        this.set('cartTotal', discountTotal);
        return this.get('discountTotal');
      }
    },
    fifteenPoundVoucher: function() {
      if ((this.get('cartTotal') > 75) && (this.get('discountApplied') === false) && (this.get('footwearInCart') === true)) {
        var discountTotal = this.get('cartTotal') - 15;
        this.set('discountAmount', 15);
        this.set('discountApplied', true);
        this.set('cartTotal', discountTotal);
        return this.get('discountTotal');
      }
    }
  }
});
