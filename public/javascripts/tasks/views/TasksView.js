define(['text!tasks/templates/tasks-template.handlebars'],function(tasksTemplate){
    return Backbone.View.extend({
        render: function() {
            var template = Handlebars.compile(tasksTemplate);
            this.$el.html(template())
            return this;
        }
    });
});