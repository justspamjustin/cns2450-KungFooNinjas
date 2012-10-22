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
            id: 'closeButton',
            xtype: 'button',
            align: 'right',
            html: '<i class="icon-remove"></i>'
          }
        ]
      },
      {
        xtype: 'panel',
        cls: 'create-task-form',
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
              '</div>'
            ].join('\n')
          },
          {
            xtype: 'panel',
            items: [
              {
                xtype: 'datepickerfield',
                cls: 'datepicker',
                labelWidth: '40%',
                label: '<i class="icon-bell"></i> <span>Reminder Date</span>',
                name: 'reminder-date',
                placeHolder: 'Select a date...'
              },
              {
                xtype: 'datepickerfield',
                cls: 'datepicker',
                labelWidth: '40%',
                label: '<i class="icon-calendar"></i> <span>Due Date</span>',
                name: 'due-date',
                placeHolder: 'Select a date...'
              }
            ]
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