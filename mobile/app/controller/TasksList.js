Ext.define('mobile.controller.TasksList', {
  extend: 'Ext.app.Controller',
  config: {
    control: {
      '#tasksList': {
        itemtap: 'onItemTap'
      }
    }
  },
  onItemTap: function(container, item, index,target, e, eOpts) {
    var $checkbox = $(index.dom).find('.task-checkbox');
    var $target = $(e.browserEvent.target);
    if($checkbox.has($target).length > 0) {
      var modelId = target.data.id;
      var model = Ext.getStore('Tasks').getById(modelId);
      model.set('completed',!target.data.completed);
    } else {
      //todo: go to details for this item
    }
  }


});