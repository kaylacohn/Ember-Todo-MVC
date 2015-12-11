import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let todos = [
      {
        title: "Learn Ember",
        complete: false,
      },
      {
        title: "Solve World Hunder",
        complete: false,
      }
    ];
    return todos
  }
});
