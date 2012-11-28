/**
 * Login/Register View
 */
Ext.define('mobile.view.LoginRegister', {
  extend: 'Ext.Container',
  id: 'loginRegisterView',
  requires: [
    'mobile.view.LoginRegisterCarousel',
    'mobile.view.Tasks'
  ],

  initialize: function() {
    Auth.isLoggedIn(function(isLoggedIn){
      if(isLoggedIn && !Util.isNotInHomeScreen()) {
        Ext.getCmp('viewport').setActiveItem({xclass: 'mobile.view.Tasks'});
      }
    });
  },

  config: {
    navigationBar: false,
    layout:{
      type: 'fit',
      align: 'stretch'
    },
    items: [
      {
        xtype: 'toolbar',
        docked: 'top',
        id: 'logo',
        height: 100,

        items: [
          {
            xtype: 'panel',
            ui: 'plain',
            html: '<div class="task-tracker-logo"><i class="icon-ok-sign"></i> <span class="app-name">Task Tracker</span></div>',
            style: 'margin:auto;color: white;'
          }
        ]
      },
      {
        xclass: 'mobile.view.LoginRegisterCarousel'
      },
      {
        xtype: 'panel',
        docked: 'bottom',
        height: 80,
        style: 'background:#333;'
      }
    ]
  },

  animateTo: function(dir) {
    Ext.getCmp('viewport').getLayout().setAnimation({
      duration: 300,
      easing: 'ease-in-out',
      type: 'slide',
      direction: dir
    });
  }

});
