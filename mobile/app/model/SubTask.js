Ext.define('mobile.model.SubTask',{
  extend: 'Ext.data.Model',
  config: {
    fields: [
      {  type: 'int', name: 'taskId'},
      {  type: 'string', name: 'createdDate'},
      {  type: 'string', name: 'subTaskName'},
      {  type: 'string', name: 'reminderMessage'},
      {  type: 'string', name: 'dueDate'},
      {  type: 'string', name: 'reminderDate'},
      {  type: 'boolean', name: 'completed', defaultValue: false}
    ]

  }
});