Ext.define('mobile.controller.CreateTask', {

  extend: 'Ext.app.Controller',

  requires: [
    'mobile.store.Tasks'
  ],

  config: {
    control: {
      '#close-button': {
        tap: 'onCloseButtonTap'
      },
      '#create-task-button': {
        tap: 'onCreateTaskButtonTap'
      }
    }
  },

  onCloseButtonTap: function() {
    this.closeDialog();
  },

  onCreateTaskButtonTap: function() {
    var taskStore = Ext.getStore('Tasks');
    taskStore.add({
      taskName: $('#task-name').val(),
      detailedDescription: $('#description').val(),
      dueDate: $('input[name="due-date"]').val(),
      reminderDate: $('input[name="reminder-date"]').val()
    });
//    taskStore.sync();
    this.closeDialog();
  },
  closeDialog: function() {
    Ext.getCmp('tasksView').animateActiveItem(1,
      {type: 'reveal', direction: 'down'});
    this.clearInputs();
  },
  clearInputs: function() {
    $('#task-name').val('');
    $('#description').val(' ');
    $('input[name="due-date"]').val('');
    $('input[name="reminder-date"]').val('');
  }
});