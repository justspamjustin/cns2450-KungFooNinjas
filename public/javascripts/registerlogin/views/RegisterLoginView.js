define(['text!registerlogin/templates/register-login-template.handlebars'],function(registerLoginTemplate){
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
        $.ajax({
            url: '/user/login?email='+loginData.email+'&password='+loginData.password,
            type: 'POST',
            success: function(data) {
                if(data.ERROR) {
                    $('#loginWarning').text(data.ERROR);
                } else {
                    router.navigate('/tasks',{trigger: true});
                }
            },
            error: function(data) {
                $('#loginWarning').text("      There was an error while you were trying to login, please try again.");
            }
        });

        var success = true;
        return success;
    },

    SendRegisterData : function (registerData){
        $.ajax({
            url: '/user?email='+registerData.email+'&password='+registerData.password,
            type: 'POST',
            success: _.bind(function(data) {
                this.SendLoginData(registerData);
            },this),
            error: function(data) {
                // If there was an error.  The problem was most likely that there is already an
                // entry with the email address.
                $('#registerWarning').text("      You have already registered with this email address.");
            }
        })
    },
    ClearWarning : function() {
        $('.warning').text("");
    }   
        
    });
});