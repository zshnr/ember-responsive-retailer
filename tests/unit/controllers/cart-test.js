import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

var products = [Ember.Object.create({name: 'shoe', category: 'Footwear', subTotal: 40}), Ember.Object.create({name: 'shirt', subTotal: 40})];

var productsNoFootwear = [Ember.Object.create({name: 'shirt', category: 'Casualwear', subTotal: 40}), Ember.Object.create({name: 'jacket', category: 'Formalwear', subTotal: 40})];

var model = Ember.ArrayProxy.create({
  content: Ember.A(products)
});

var modelNoFootwear = Ember.ArrayProxy.create({
  content: Ember.A(productsNoFootwear)
});

moduleFor('controller:cart', {
  beforeEach() {
    this.controller = this.subject();
  }
});

test('cartTotal', function(assert) {
  this.controller.set('model', model);

  assert.equal(this.controller.get('cartTotal'), 80, 'The cart total function returns the total of all the subTotals in our model');
});

test('footwearInCart property works', function(assert) {
  this.controller.set('model', model);

  assert.equal(this.controller.get('footwearInCart'), true, 'The footwearInCart function returns true if the category property of product in cart contains the word "Footwear"');
});

test('initially there is no discount amount that is applied', function(assert) {
  assert.expect(2);

  assert.equal(this.controller.get('discountAmount'), 0, 'There is no discount amount');

  assert.equal(this.controller.get('discountApplied'), false, 'Discount Applied is false');
});

test('For purchases within £50 a five pound voucher is applied', function(assert) {
  assert.expect(4);

  this.controller.set('cartTotal', 45);

  assert.equal(this.controller.get('cartTotal'), 45, 'The cart total without discount is £50');

  this.controller.send('fivePoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 40, 'The cart total is now the discounted amount, £40');

  assert.equal(this.controller.get('discountApplied'), true, 'Discount applied is now true');

  assert.equal(this.controller.get('discountAmount'),5 , 'It shows the correct discount amount');
});

test('For purchases between £51 and £75 a ten pound voucher is applied', function(assert) {
  assert.expect(4);

  this.controller.set('cartTotal', 65);

  assert.equal(this.controller.get('cartTotal'), 65, 'The cart total without discount is £65');

  this.controller.send('tenPoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 55, 'The cart total is now the discounted amount, £55');

  assert.equal(this.controller.get('discountApplied'), true, 'Discount applied is now true');

  assert.equal(this.controller.get('discountAmount'), 10, 'It shows the correct discount amount');
});

test('For purchase over £75 with footwear in the cart, a fifteen pound voucher is applied', function(assert) {
  assert.expect(4);

  this.controller.set('model', model);

  assert.equal(this.controller.get('cartTotal'), 80, 'The cart total without discount is £80');

  this.controller.send('fifteenPoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 65, 'The cart total is now the discounted amount, £65');

  assert.equal(this.controller.get('discountApplied'), true, 'Discount applied is now true');

  assert.equal(this.controller.get('discountAmount'), 15, 'It shows the correct discount amount');
});

test('Fifteen Pound voucher is not applied when amount is correct but no footwear item is in cart', function(assert) {
  assert.expect(4);

  this.controller.set('model', modelNoFootwear);

  assert.equal(this.controller.get('cartTotal'), 80, 'The cart total without discount is £80');

  this.controller.send('fifteenPoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 80, 'The cart total is still £80');

  assert.equal(this.controller.get('discountApplied'), false, 'Discount has not been applied');

  assert.equal(this.controller.get('discountAmount'), 0, 'It shows the correct discount amount (0)');
});

test('Fifteen Pound voucher is not applied on incorrect amount', function(assert) {
  assert.expect(3);

  this.controller.set('cartTotal', 75);

  this.controller.send('fifteenPoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 75, 'The cart total is still £75');

  assert.equal(this.controller.get('discountApplied'), false, 'Discount has not been applied');

  assert.equal(this.controller.get('discountAmount'), 0, 'It shows the correct discount amount (0)');

});

test('Ten pound voucher is not applied on incorrect amount', function(assert) {
  assert.expect(3);

  this.controller.set('cartTotal', 80);

  this.controller.send('tenPoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 80, 'The cart total is still £80');

  assert.equal(this.controller.get('discountApplied'), false, 'Discount has not been applied');

  assert.equal(this.controller.get('discountAmount'), 0, 'It shows the correct discount amount (0)');
});

test('Five pound voucher is not applied on incorrect amount', function(assert) {
  assert.expect(3);

  this.controller.set('cartTotal', 51);

  this.controller.send('fivePoundVoucher');

  assert.equal(this.controller.get('cartTotal'), 51, 'The cart total is still £51');

  assert.equal(this.controller.get('discountApplied'), false, 'Discount has not been applied');

  assert.equal(this.controller.get('discountAmount'), 0, 'It shows the correct discount amount (0)');
});
