Ext.define('mobile.view.TasksList',{
  extend: 'Ext.dataview.List',
  id: 'tasksList',
  initialize: function() {
    Ext.dataview.List.prototype.initialize.call(this);
  },
  
  config: {
    store: 'Tasks',
    deferEmptyText: true,
    itemCls: 'task-list-item'
  },

  getItemTpl: function() {
    var itemTpl = Ext.dataview.List.prototype.getItemTpl.call(this);
    itemTpl.fn = function(out,values,parent,xindex,xcount) {
      var month = new Date(values.dueDate).getMonth();
      var monthDay = new Date(values.dueDate).getDate();
      var completedClass = values.completed ? ' completed' : '';
      out.push(
        '<div class="inner-task-list-item'+completedClass+'">',
        ' <span class="task-checkbox"><i class="icon-ok"></i></span>',
        ' <span class="task-name">'+values.taskName+'</span>',
        ' <span class="task-due-date">',
        '   <span class="task-due-date-icon"><i class="icon-calendar"></i></span>',
        '   <span class="task-due-date-text">'+month+'/'+monthDay+'</span>',
        ' </span>',
        '</div>'
      );
    }
    return itemTpl;
  }
});