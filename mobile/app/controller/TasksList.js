Ext.define('mobile.controller.TasksList', {
  extend: 'Ext.app.Controller',
  config: {
    control: {
      '#tasksList': {
        itemtap: 'onItemTap',
        itemswipe: 'onItemSwipe'
      }
    }
  },

  onItemTap: function(container, item, index,target, e, eOpts) {
    var $checkbox = $(index.dom).find('.task-checkbox');
    var $target = $(e.browserEvent.target);
    var $deleteButton = $target.find('.delete-task');
    if(!$deleteButton.hasClass('showing')) {
      if($checkbox.has($target).length > 0 ||
        $checkbox.is($target)) {
        this.onTapCheckbox(target.data);
      } else if($target.hasClass('delete-task')) {
        this.onTapDelete(target.data);
      } else {
        Ext.getCmp('tasksView').push({xclass: 'mobile.view.TaskDetails',modelId:target.data.id});
      }
    } else {
      $deleteButton.removeClass('showing');
    }
  },

  onItemSwipe: function(container, item, index,target, e, eOpts) {
    var $target = $(e.browserEvent.target);
    var $deleteButton = $target.find('.delete-task');
    if(e.direction == 'left'
      && !$deleteButton.hasClass('showing')) {
      $deleteButton.addClass('showing');
    } else if($deleteButton.hasClass('showing')) {
      $deleteButton.removeClass('showing');
    }
  },

  onTapCheckbox: function(data) {
    var model = Ext.getStore('Tasks').getById(data.id);
    model.set('completed',!data.completed);
  },

  onTapDelete: function(data) {
    var store = Ext.getStore('Tasks');
    var model = store.getById(data.id);
    store.remove(model);
  }


});