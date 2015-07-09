import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('cart-list', 'Unit | Component | cart list', {
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
});
