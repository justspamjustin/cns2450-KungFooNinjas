Ext.define('mobile.view.LoginRegisterCarousel',{
  extend: 'Ext.carousel.Carousel',
  requires: [
    'mobile.view.Tasks'
  ],
  id: 'loginRegisterCarousel',
  config: {
    layout: 'fit',
    items: [
      {
        xtype: 'container',
        items: [
          {
            html: [
              '<form class="login-register-form login-form">',
              '<div class="input-prepend">',
              ' <span class="add-on"><i class="icon-envelope"></i></span>',
              ' <input class="span2" id="email" size="16" type="email" placeholder="Email">',
              '</div>',
              '<div class="input-prepend">',
              ' <span class="add-on"><i class="icon-key"></i></span>',
              ' <input class="span2" id="password" size="16" type="password" placeholder="Password">',
              '</div>',
              '</form>'
            ].join('\n')
          },
          {
            xtype: 'button',
            html: '<i class="icon-ok-sign"></i> <span>Sign In</span>',
            style: 'width:80%;margin:auto;',
            onTap: function() {
              $.ajax({
                url: '/user/login?email='+$('#email').val()+'&password='+$('#password').val(),
                type: 'POST',
                success: function(data) {
                  if(data.ERROR) {
                    //todo: do a real error message
                    alert(data.ERROR);
                  } else {
                    Ext.getCmp('viewport').setActiveItem({xclass: 'mobile.view.Tasks'});
                  }
                },
                error: function(data) {
                  //todo: real error message
                  alert("There was an error while you were trying to login, please try again.");
                }
              });
            }
          }
        ]
      },
      {
        xtype: 'container',
        items: [
          {
            html: [
              '<form class="login-register-form register-form">',
              '<div class="input-prepend">',
              ' <span class="add-on"><i class="icon-envelope"></i></span>',
              ' <input class="span2" id="register-email" size="16" type="email" placeholder="Email">',
              '</div>',
              '<div class="input-prepend">',
              ' <span class="add-on"><i class="icon-key"></i></span>',
              ' <input class="span2" id="register-password" size="16" type="password" placeholder="Password">',
              '</div>',
              '<div class="input-prepend">',
              ' <span class="add-on"><i class="icon-key"></i></span>',
              ' <input class="span2" id="register-password-verify" size="16" type="password" placeholder="Verify Password">',
              '</div>',
              '</form>'
            ].join('\n')
          },
          {
            xtype: 'button',
            html: '<i class="icon-user"></i> <span>Sign Up</span>',
            style: 'width:80%;margin:auto;',
            onTap: function() {
              $.ajax({
                url: '/user?email='+$('#register-email').val()+'&password='+$('#register-password').val(),
                type: 'POST',
                success: function(data) {
                  Ext.getCmp('viewport').setActiveItem({xclass: 'mobile.view.Tasks'});
                },
                error: function(data) {
                  // If there was an error.  The problem was most likely that there is already an
                  // entry with the email address.
                  // todo: handle the error
                  alert('You have already registered with this email address.');
                }
              })


            }
          }
        ]
      }
    ]
  }

});