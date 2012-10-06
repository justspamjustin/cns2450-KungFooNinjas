// router will be a global
var router;
require(['Router','utility/Auth'],function(Router,Auth){
    router = new Router();
    Backbone.history.start({pushState: true});
    Auth.isLoggedIn(function(isLoggedIn){
        if(isLoggedIn) {
            router.navigate('/tasks',{trigger:true});
        }
    });
});