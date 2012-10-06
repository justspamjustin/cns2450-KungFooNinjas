define([],function(){
   return {
       isLoggedIn: function(callback) {
           $.ajax({
               url: '/user/isloggedin',
               type: 'GET',
               success: function(data) {
                   callback(data.IS_LOGGED_IN);
               },
               error: function(data) {
                   
               }
           });
       }
   }
});