require(['views/HelloWorldView'],function(HelloWorldView){
    var helloWorldView = new HelloWorldView({
       el:$("#inner-pages")
    });

    helloWorldView.render();

});