$(document).ready(function() {
    main.init();
});


var main ={
     urlMessages: "https://tiny-tiny.herokuapp.com/collections/lynch/",
     urlUsers:"https://tiny-tiny.herokuapp.com/collections/lynchUsers/",
     message:{
        username: "cglane",
        message: "hello, world",
        avatar: "http://31.media.tumblr.com/fffd0f8677c5f75e47bfbaa9a17c44e9/tumblr_neyjbn8JGm1texwuzo1_400.gif",

    },
      users:{
        name: "cglane",
        avatar: "http://31.media.tumblr.com/fffd0f8677c5f75e47bfbaa9a17c44e9/tumblr_neyjbn8JGm1texwuzo1_400.gif",
        status: "online",
        sign: "virgo",

      },


    init:function() {
      main.styling();
      main.events();
    },

    styling: function(){

    },

    events:function(){
      main.postMessage(main.message);
      // main.deleteInSpace("56391d8e3802890300842c6e");
    },
  loadMessages:function(){

  },


  postMessage: function(bitter) {
  $.ajax({
    url: main.url,
    method: 'POST',
    data: bitter,
    success: function(resp) {
      console.log(resp);
      var tmpl = _.templates(templates.messages);
      $('.usermessage').tmpl(resp);
    },
    failure: function(resp) {
      console.log("FAILURE", resp);
    }
  });
},
grabMessages: function() {
  $.ajax({
    type: 'GET',
    url: bitterPage.url,
    success: function(data) {
      main.loadMessages(data);
    },
    failure: function(data) {
      console.log("FAILURE: ", data);
    }
  });
},

deleteInSpace: function(messageId) {
  $.ajax({
    method: 'DELETE',
    url: main.url + messageId,
    success: function(data) {
      console.log("DELETED", data);
    },
    failure: function(data) {
      console.log("ERROR", data);
    }
  });
}
};
