Ext.define('mobile.controller.Tasks', {

  extend: 'Ext.app.Controller',
  requires: ['mobile.view.CreateTask'],
  config: {
    control: {
      '#addTaskButton': {
          tap: 'onAddTaskButtonTap'
      }
    }
  },

  onAddTaskButtonTap: function() {
    Ext.getCmp('tasksView').animateActiveItem(0,
      {type: 'cover', direction: 'up'});
  }
});