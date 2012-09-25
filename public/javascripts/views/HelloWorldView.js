define(['text!templates/hello-world-template.handlebars'],function(helloWorldTemplate){
    return Backbone.View.extend({
        render: function() {
            var template = Handlebars.compile(helloWorldTemplate);
            this.$el.html(template());
            return this;
        }
    });
});