require(['KO','viewmodels/HelloWorldViewModel','text!views/helloworld.handlebars'],function(ko,HelloWorldViewModel,HelloWorldView){
    var template = Handlebars.compile(HelloWorldView);
    $("#inner-pages").html(template());
    ko.applyBindings(new HelloWorldViewModel("Planet", "Earth"));
});