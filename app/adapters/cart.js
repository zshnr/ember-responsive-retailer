import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function(modelName) {
    return modelName;
  }
});
