Ext.define('mobile.model.Task',{
  extend: 'Ext.data.Model',
  config: {
    fields: [
      {  type: 'int', name: 'ownerId'},
      {  type: 'string', name: 'createdDate'},
      {  type: 'string', name: 'taskName'},
      {  type: 'string', name: 'detailedDescription'},
      {  type: 'string', name: 'dueDate'},
      {  type: 'string', name: 'reminderDate'},
      {  type: 'boolean', name: 'completed', defaultValue: false}
    ]

  }
});