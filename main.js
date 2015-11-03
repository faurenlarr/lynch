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
      main.grabMessages();
      // main.deleteInSpace("56391d8e3802890300842c6e");
    },
<<<<<<< HEAD
  loadMessages:function(data){
    var tmpl = _.template(templates.messageTemplate);
    $('.chatfield').append(tmpl(data));
    console.log(data);
  },
  loadUsers:function(data){
    var tmpl = _.templates(templates.messageTemplate);
    $('aside .users').append(tmpl(data));
    console.log(data);
  },
=======
    loadMessages:($el, data, tmpl){

>>>>>>> 56c00b73fa89474d944b0c1687fb4814d66bbac7

grabUsers:function(){
    $.ajax({
      url:main.urlUsers,
      method:'GET',
      success:function(users){
        console.log(users);
        main.loadUsers(users);
      }
    });
},
  postUsers:function(user){
    $.ajax({
      url:main.urlUsers,
      method:'POST',
      data: user,
      success:function(data){
        console.log(data);
      },
      failure:function(data){
        console.log("You are a failure" + data);
      }
    });
  },
  deletUsers:function(userId){
      $.ajax({
        url:main.urlUsers + userId,
        method: 'DELETE',
        success:function(){
          console.log(data + "deleted");

        },
        failure:function(){
          console.log(data+ " :not deleted, idiot");
        }

<<<<<<< HEAD
      });
  },
=======

>>>>>>> 56c00b73fa89474d944b0c1687fb4814d66bbac7
  postMessage: function(bitter) {
  $.ajax({
    url: main.urlMessages,
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
    url: main.urlMessages,
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
    url: main.urlMessages + messageId,
    success: function(data) {
      console.log("DELETED", data);
    },
    failure: function(data) {
      console.log("ERROR", data);
    }
  });
}
};
