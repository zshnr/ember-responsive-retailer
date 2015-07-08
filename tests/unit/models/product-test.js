import { moduleForModel, test } from 'ember-qunit';

moduleForModel('product', 'Unit | Model | product', {
});

test('Product Properties', function(assert) {
  assert.expect(9);
  var product = this.subject();
  var store = this.store();

  assert.ok(product, 'A model with this name exists');

  assert.ok(store, 'A store exists');

  assert.ok(product.name, 'Product has a name property');

  assert.ok(product.description, 'Product has a description property');

  assert.ok(product.category, 'Product has a category property');

  assert.ok(product.price, 'Product has a price property');

  assert.ok(product.quantityInStock, 'Product has a quantityInStock property');

  assert.ok(product.imageUrl, 'Product has a imageUrl property');

  assert.ok(product.quantityInCart, 'Product has a quantityInCart property');
});

test('it can compute a subtotal', function(assert) {
  var product = this.subject({price: 5, quantityInCart: 2});
  assert.equal(product.get('subTotal'), 10, 'It can calcuate a subtotal from its price and quantityInCart properties');
});

test('it can compute if its in a cart or not', function(assert) {
  var product = this.subject({quantityInCart: 0});
  assert.equal(product.get('isInCart'), false, 'isInCart property is false if the product has zero quantity in cart');
});
