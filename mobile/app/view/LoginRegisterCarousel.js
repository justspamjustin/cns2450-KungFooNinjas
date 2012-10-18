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
              ' <input class="span2" id="email" size="16" type="text" placeholder="Email">',
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
            html: 'Sign In',
            style: 'width:80%;margin:auto;',
            onTap: function() {
              Ext.getCmp('viewport').setActiveItem({xclass: 'mobile.view.Tasks'});
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
              ' <input class="span2" id="register-email" size="16" type="text" placeholder="Email">',
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
            html: 'Sign Up',
            style: 'width:80%;margin:auto;',
            onTap: function() {
              Ext.getCmp('viewport').setActiveItem({xclass: 'mobile.view.Tasks'});
            }
          }
        ]
      }
    ]
  }

});