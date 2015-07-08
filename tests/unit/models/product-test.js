import { moduleForModel, test } from 'ember-qunit';

moduleForModel('product', 'Unit | Model | product', {
});

test('it exists', function(assert) {
  var model = this.subject();
  var store = this.store();
  assert.ok(model, 'A model with this name exists');
  assert.ok(store, 'A store exists');
});

test('it has a name', function(assert) {
  var product = this.subject();
  assert.ok(product.name, 'Product has a name property');
});

test('it has a description', function(assert) {
  var product = this.subject();
  assert.ok(product.description, 'Product has a description property');
});

test('it has a category', function(assert) {
  var product = this.subject();
  assert.ok(product.category, 'Product has a category property');
});

test('it has a price', function(assert) {
  var product = this.subject();
  assert.ok(product.price, 'Product has a price property');
});

test('it has a quantity in stock', function(assert) {
  var product = this.subject();
  assert.ok(product.quantityInStock, 'Product has a quantityInStock property');
});

test('it has an image', function(assert) {
  var product = this.subject();
  assert.ok(product.imageUrl, 'Product has a imageUrl property');
});

test('it has a quantity in cart', function(assert) {
  var product = this.subject();
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
