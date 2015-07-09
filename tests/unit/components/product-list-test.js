import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('product-list', 'Unit | Component | product list', {
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
});
