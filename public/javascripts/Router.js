define(['utility/Auth'],function(Auth){
    return Backbone.Router.extend({
        routes: {
            '': 'index',
            'tasks': 'tasks'
        },

        index: function() {
            require(['registerlogin/views/RegisterLoginView'],function(RegisterLoginView){
                var registerLoginView = new RegisterLoginView({
                    el:$('#inner-pages')
                });

                registerLoginView.render();
            });
        },

        tasks: function() {
            Auth.isLoggedIn(function(isLoggedIn){
                if(isLoggedIn) {
                    require(['tasks/views/TasksView'],function(TasksView){
                        var tasksView = new TasksView({
                            el: $('#inner-pages')
                        });

                        tasksView.render();
                    });
                } else {
                    router.navigate('',{trigger: true});
                }
            });

        }
    });
});