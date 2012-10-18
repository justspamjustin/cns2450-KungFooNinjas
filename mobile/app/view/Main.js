Ext.define("mobile.view.Main", {
  extend: 'Ext.Container',
  id: 'viewport',
  requires: [
    'mobile.view.LoginRegister'
  ],
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
    items: {
      xclass: 'mobile.view.LoginRegister'
    }
  }
});
