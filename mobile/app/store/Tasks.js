Ext.define('mobile.store.Tasks',{
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest'
  ],
  config: {
    model: 'mobile.model.Task',
    autoLoad: true,
    autoSync: true,
    grouper: {
      groupFn: function(record) {
        return record.get('completed');
      }
    },
    proxy: {
      type: 'rest',
      url: '/task'
    }
  }
});