window.TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
      return [{
        text: 'Say Hello',
        callback: function(t) {
          return t.popup({
            title: "Hello!",
            items: [{
              text: 'Olá, esse é um pop-up do Power-Up!',
              callback: function(t) {
                return t.closePopup();
              }
            }]
          });
        }
      }];
    }
  });
  