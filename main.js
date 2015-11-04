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
      },


    init:function() {
      main.styling();
      main.events();
      main.deleteAll();
    },

    styling: function(){
    },

    events:function(){
      main.grabMessages();

      $('.textbox').on('click', '.submit',function(e) {
        e.preventDefault();
        var messageText = $(this).siblings('input[name="message"]').val();
        var data ={
          _id: "",
          username: "cglane",
          message: messageText,
          avatar: "http://31.media.tumblr.com/fffd0f8677c5f75e47bfbaa9a17c44e9/tumblr_neyjbn8JGm1texwuzo1_400.gif",
        };
        main.postMessage(data);
            console.log("hello World");
        $(this).siblings('input[name="message"]').val(' ');
      });
      $('.textbox').keypress('input',function(e){
       if(e.which == 13){//Enter key pressed
           $('button').click();//Trigger search button click event
       }
     });;
     $('.chatbox').on('click','button',function(){
       var id = $(this).parent('div').attr('id');
       main.deleteMessages(id);
     });
    },

  loadMessages:function(data){

    var tmpl = _.template(templates.userInput);
      $('.chatfield').append(tmpl(data));


  },

  loadUsers:function(data){
    var tmpl = _.templates(templates.messageTemplate);
    $('aside .users').append(tmpl(data));
    console.log(data);
  },


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
  deleteUsers:function(userId){
      $.ajax({
        url: main.urlUsers + userId,
        method: 'DELETE',
        success:function(data){
          console.log(data + "deleted");

        },
        failure:function(){
          console.log(data+ " :not deleted, idiot");
        }

      });
  },

  postMessage: function(message) {
  $.ajax({
    url: main.urlMessages,
    method: 'POST',
    data: message,
    success: function(resp) {
      console.log(resp);
      var tmpl = _.template(templates.userInput);
      $('.chatfield').append(tmpl(resp));
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
      console.log(data);
      main.loadMessages(data);
    },
    failure: function(data) {
      console.log("FAILURE: ", data);
    }
  });
},

deleteMessages: function(messageId) {
  $.ajax({
    method: 'DELETE',
    url: main.urlMessages + messageId,
    success: function(data) {
      console.log("DELETED", data);
      var id = '#' + messageId;
      $(id).remove();
    },
    failure: function(data) {
      console.log("ERROR", data);
    }
  });
},
deleteAll:function(){
  $.ajax({
    method: 'DELETE',
    url:main.urlMessages,
    success:function(){
      console.log('all deleted');
    }
  })
}
};
