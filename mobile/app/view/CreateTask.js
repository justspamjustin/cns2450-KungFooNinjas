Ext.define('mobile.view.CreateTask', {
  extend: 'Ext.Container',

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
        html: '<h1>Create tasks here</h1>'
      }
    ]
  }
});