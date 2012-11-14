Ext.define('mobile.view.Tasks', {
  extend: 'Ext.NavigationView',
  requires: [
    'mobile.view.CreateTask',
    'mobile.view.TasksList'
  ],
  id: 'tasksView',
  initialize: function() {
    Ext.getStore('Tasks').load();
  },
  config: {
    navigationBar: false,
    layout: 'card',
    items: [
      {
        xclass: 'mobile.view.CreateTask'
      },
      {
        xtype: 'container',
        layout: 'fit',
        items: [
          {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Tasks',
            items: [
              {
                xtype: 'button',
                align: 'left',
                html: '<i class="icon-plus"></i>',
                id: 'addTaskButton'
              },
              {
                xtype: 'button',
                align: 'right',
                html: '<i class="icon-signout"></i>',
                onTap: function() {
                  Auth.logout();
                }

              }
            ]
          },
          {
            xclass: 'mobile.view.TasksList'
          }
        ]
      }
    ]
  }
});