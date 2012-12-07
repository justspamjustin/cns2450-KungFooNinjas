Ext.define('mobile.store.SubTasks',{
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest'
  ],
  config: {
    model: 'mobile.model.SubTask',
    autoSync: true,
    grouper: {
      groupFn: function(record) {
        return record.get('completed');
      }
    },
    proxy: {
      type: 'rest',
      url: '/subtask'
    }
  }
});