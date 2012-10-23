Ext.define('mobile.store.Tasks',{
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest'
  ],
  config: {
    model: 'mobile.model.Task',
    proxy: {
      type: 'rest',
      url: '/task'
    }
  }
});