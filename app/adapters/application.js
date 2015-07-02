import LFAdapter from 'ember-localforage-adapter/adapters/localforage';

export default LFAdapter.extend({
  shouldReloadAll: function() {
    return true;
  }
});
