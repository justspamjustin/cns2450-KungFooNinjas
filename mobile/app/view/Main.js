Ext.define("mobile.view.Main", {
  extend: 'Ext.Container',
  id: 'viewport',
  requires: [
    'mobile.view.LoginRegister',
    'mobile.view.AddToHomeScreen'
  ],
  initialize: function() {
    if(Util.isNotInHomeScreen()) {
      this.setActiveItem(2);
    }

    Ext.Container.prototype.initialize.call(this);
  },
  config: {
    layout: {
      type: 'card',
      animation: {
        duration: 300,
        easing: 'ease-in-out',
        type: 'slide',
        direction: 'left'
      }
    },
    fullscreen: true,
    items: [
      {
        xclass: 'mobile.view.LoginRegister'
      },
      {
        xclass: 'mobile.view.AddToHomeScreen'
      }
    ]
  }
});
