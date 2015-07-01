import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  quantityInStock: DS.attr('number'),
  imageUrl: DS.attr('string'),
  toCartItem: function() {
    let CartItem = this.container.lookupFactory('model:cart-item');
    return CartItem.create({
      name: this.get('name'),
      price: this.get('price')
    });
  }
});
