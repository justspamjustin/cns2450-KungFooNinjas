require(['views/RegisterLoginView'],function(RegisterLoginView){
    var registerLoginView = new RegisterLoginView({
       el:$("#inner-pages")
    });

    registerLoginView.render();

});