// this section is used to define templates inside this array.

var templates ={
  templateExample:[
    'a cool example of stuff',
    'containing html like <h3></h3>',
    'and if you want your variables',
    'do this<h1><%=name%></h1>',
  ].join(""),

  userInput:[
    '<div class="col-md-12 generatedChat">',
    '<div class="col-md-3 username">',
    '<div class="col-md-12 userImg">',
    '<img src="<%=avatar%>" alt="">',
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
