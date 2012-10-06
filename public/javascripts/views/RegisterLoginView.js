define(['text!templates/register-login-template.handlebars'],function(registerLoginTemplate){
    return Backbone.View.extend({
        render: function() {
            var template = Handlebars.compile(registerLoginTemplate);
            this.$el.html(template());
            return this;
        },
        events:{ 
            "click #loginButton":"LoginOnClick",
            "click #registerButton": "RegisterOnClick"                    
        }, 
      LoginOnClick : function(){
        if(($('#loginEmail').val() == "") || ($('#loginPassword').val() == "")){
            $('#loginWarning').text("      To login you must enter your E-Mail address and Password");       
            setTimeout(this.ClearWarning, 5000);
        }
        else
        {
            var loginObject = {
                email: $('#loginEmail').val(),
                password: $('#loginPassword').val()
            }
            var success = this.SendLoginData(loginObject);
            if(success){
                alert("goto task list page");
            }
            else
            {
                $('#loginWarning').text(" Incorrect E-Mail address or Password");       
                setTimeout(this.ClearWarning, 5000);
            }
//            alert($('#loginEmail').val()+" login clicked " + loginObject.email + " " + loginObject.password);
        }
    },   
    RegisterOnClick: function(){
        if(($('#registerEmail').val() == "") || ($('#registerPassword1').val() == "")|| ($('#registerPassword2').val() == "")){
             $('#registerWarning').text("      To Register you must fill in all the registration fields, E-Mail address, Password, and Confirm Password");
              setTimeout(this.ClearWarning, 5000);
            //alert("To Register you must fill in all the registration fields, E-Mail address, Password, and Verify Password");
        }
        else
        {
            if($('#registerPassword1').val() == $('#registerPassword2').val())
            {
                var registerObject = {
                    email: $('#registerEmail').val(),
                    password: $('#registerPassword1').val()
                }
                this.SendRegisterData(registerObject);
                //alert("register clicked "+ registerObject.email + " " + registerObject.password);
            }
            else
            {
                $('#registerPasswordWarning').text("      your passwords do not match");
                setTimeout(this.ClearWarning, 5000);
               
            }
        }
        
    },
    SendLoginData: function (loginData){
        alert("email: " + loginData.email + " password: " + loginData.password);
        var success = false;
        return success;
    },

    SendRegisterData : function (registerData){
        $.ajax({
            url: '/user?email='+registerData.email+'&password='+registerData.password,
            type: 'POST',
            success: function(data) {
                //todo: auto login
            },
            error: function(data) {
                $('#registerWarning').text("      You have already registered with this email address.");
            }
        })
    },
    ClearWarning : function() {
        $('.warning').text("");
    }   
        
    });
});