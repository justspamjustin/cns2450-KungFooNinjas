Ext.define('mobile.view.TaskDetails', {
  extend: 'Ext.Container',
  id: 'taskDetails',
  initialize: function() {
    var model = Ext.getStore('Tasks').getById(this.modelId);
    this.record = model;
    this.items.items[0].setTitle(this.record.data.taskName);
    console.log(this.record.data);
    Ext.getCmp('descriptionContainer').setHtml(this.record.data.detailedDescription)
  },
  config: {
    xtype: 'container',
    layout: 'fit',
    items: [
      {
        docked: 'top',
        xtype: 'titlebar',
        title: 'Task Name Here',
        items: [
          {
            xtype: 'button',
            ui: 'back',
            align: 'left',
            html: 'Back',
            id: 'backToTasks',
            onTap: function() {
              Ext.getCmp('tasksView').pop();
            }
          }
        ]
      },
      {
        xtype: 'container',
        layout: {
          type: 'vbox'
        },
        id: 'descriptionContainer',
        items: [
          {
            xtype: 'container',
            id: 'descriptionContainer'
          },
          {
            xtype: 'container',
            layout: {
              type: 'hbox'
            },
            items: [
              {
                xtype: 'container',
                html: '<i class="icon-bell"></i> Reminder'
              },
              {
                xtype: 'container',
                html: '<i class="icon-calendar"></i> Reminder'
              }
            ]
          },
          {
            xtype: 'container',
            items: [
              {
                xtype: 'titlebar',
                title: 'Sub Tasks',
                items: [
                  {
                    xtype: 'button',
                    align: 'left',
                    html: '<i class="icon-plus"></i>',
                    id: 'addSubTaskButton'
                  }
                ]
              },
//          {
//            xclass: 'mobile.view.TasksList'
//          }
            ]
          }
        ]
      }
    ]
  }
});