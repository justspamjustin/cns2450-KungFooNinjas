Ext.define('mobile.controller.CreateTask', {

  extend: 'Ext.app.Controller',
  config: {
    control: {
      '#closeButton': {
          tap: 'onCloseButtonTap'
      }
    }
  },

  onCloseButtonTap: function() {
    Ext.getCmp('tasksView').animateActiveItem(1,
      {type: 'reveal', direction: 'down'});

  }
});