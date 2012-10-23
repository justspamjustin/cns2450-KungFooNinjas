Ext.define('mobile.view.CreateTask', {
  extend: 'Ext.Container',
  requires: [
    'Ext.field.DatePicker'
  ],

  id: 'createTaskView',
  config: {
    layout: 'fit',
    items: [
      {
        docked: 'top',
        xtype: 'titlebar',
        title: 'Create Task',
        items: [
          {
            id: 'close-button',
            xtype: 'button',
            align: 'right',
            html: '<i class="icon-remove"></i>'
          }
        ]
      },
      {
        xtype: 'panel',
        cls: 'create-task-form',
        scrollable: true,
        items: [
          {
            xtype: 'panel',
            html: [
              '<div class="centered-form">',
              ' <div class="input-prepend">',
              '   <span class="add-on"><i class="icon-ok-sign"></i></span>',
              '   <input class="span2" name="task-name" id="task-name" size="16" type="text" placeholder="Task Name (required)">',
              ' </div>',
              ' <span class="add-on"><i class="icon-tasks"></i></span>',
              ' <textarea name="description" id="description" rows="4" cols="50" placeholder="Description..."></textarea>',
              ' <div class="input-prepend">',
              '   <span class="add-on"><i class="icon-bell"></i> Reminder Date</span>',
              '   <input class="span2" name="reminder-date" id="reminder-date" type="datetime">',
              ' </div>',
              ' <div class="input-prepend">',
              '   <span class="add-on"><i class="icon-calendar"></i> Due Date</span>',
              '   <input class="span2" name="due-date" id="due-date" type="date">',
              ' </div>',
              '</div>'
            ].join('\n')
          },
          {
            xtype: 'button',
            id: 'create-task-button',
            html: '<i class="icon-ok"></i> <span>Save</span>'
          }
        ]
      }
    ]
  }
});