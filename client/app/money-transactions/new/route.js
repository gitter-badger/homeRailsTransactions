import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log('enter inside model');
    return this.store.createRecord('money_transaction');
  },
  actions: {

    // saveTransaction: function() {

    //   console.log(this.get('description'));
    //   this.currentModel.save().then(function() {
    //     console.log('------------');
    //     console.log(this.get('description'));
    //     this.transitionToRoute('money_transactions');
    //   }.bind(this), function(error) {
    //     console.log(error);
    //   });
    // },

    // cancel: function() {
    //   this.transitionToRoute('money_transactions');
    // }
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
