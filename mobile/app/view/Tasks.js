Ext.define("mobile.view.Tasks", {
  extend: 'Ext.Container',
  id: 'tasksView',
  config: {
    layout: 'fit',
    items: [
      {
        docked: 'top',
        xtype: 'titlebar',
        title: 'Tasks',
        items: [
          {
            xtype: 'button',
            align: 'left'
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
        xtype: 'panel',
        html: '<h1>Tasks will go here!</h1>'
      }
    ]
  }
});