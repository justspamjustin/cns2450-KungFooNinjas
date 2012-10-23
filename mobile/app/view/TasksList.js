Ext.define('mobile.view.TasksList',{
  extend: 'Ext.dataview.List',
  id: 'tasksList',
  config: {
    store: 'Tasks',
    itemTpl: [
      '<div>{taskName}</div>'
    ]
  }
});