// this section is used to define templates inside this array.

var templates ={
  messageTemplate:[
  '<div class="col-md-12 generatedChat">',
    '<div class="col-md-3 username">',
    '<div class="col-md-12 userImg">',
    '<img src="<%= avatar%>" alt="">',
    '</div>',
    '<div class="col-md-12 userid">',
    '<%=username%>',
    '</div>',
    '</div>',
    '<div class="col-md-9 usermessage">',
    '<%=message%>',
    '</div>',
    '</div>',
  ].join("")
};
