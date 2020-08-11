//dom queries
let chatList = document.querySelector(".chat-list");
//class instances
let chatUI = new UIClass(chatList);
let chatroom = new chatRoom('general', 'abdullah');
//rendering the class instances
chatroom.getChats(data => chatUI.render(data));
