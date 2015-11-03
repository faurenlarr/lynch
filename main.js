$(document).ready(function() {
    main.init();
});


var main ={
     url: "https://tiny-tiny.herokuapp.com/collections/lynch",
     message:{
        username: "cglane",
        message: "hello, world",
        avatar: "http://31.media.tumblr.com/fffd0f8677c5f75e47bfbaa9a17c44e9/tumblr_neyjbn8JGm1texwuzo1_400.gif",

    },

    init:function() {
      main.styling();
      main.events();
    },

    styling: function(){

    },

    events:function(){
      main.postMessage(main.message);
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
// : function(bitter,$editedField) {
//   $.ajax({
//     type: 'PUT',
//     url: bitterPage.url + bitter.id,
//     data: bitter,
//     success: function(editedBitter) {
//       console.log("I WAS CHANGED: ", editedBitter);
//       console.log($editedField);
//
//       $editedField.parent().css('display', 'none');
//       $editedField.parent().siblings('p').text(editedBitter.bitter);
//       $editedField.parent().siblings('h3').html('<img src="' + editedBitter.avatar +'">');
//     },
//     failure: function(editedBitter) {
//       console.log('IM STILL A FAILURE: ', editedBitter);
//     }
//   })
// },
deleteInSpace: function(messageID) {
  $.ajax({
    method: 'DELETE',
    url: main.url + bitterID,
    success: function(data) {
      console.log("DELETED", data);
    },
    failure: function(data) {
      console.log("ERROR", data);
    }
  });
}
};
