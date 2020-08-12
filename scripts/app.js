//dom queries
let chatList = document.querySelector(".chat-list");
let newChatForm = document.querySelector(".new-chat");
let newNameForm = document.querySelector(".new-name");
let updateMsg = document.querySelector(".update-msg");
let rooms = document.querySelector('.chat-rooms');
let roomIdentifier = document.querySelector("h4")

//adding new chats
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    let message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));

})
//updating username
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    let newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    //showing update username message
    updateMsg.innerText = `Username updated to ${newName}`;
    setTimeout(() => updateMsg.innerText = "", 3500);
})
// update the chat room
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
      chatUI.clear();
      chatroom.updateRoom(e.target.getAttribute('id'));
      chatroom.getChats(chat => chatUI.render(chat));
      roomIdentifier.innerText = `${e.target.getAttribute('id')}`
    }
  });
  
// check local storage for name
let username = localStorage.username ? localStorage.username : 'anonymous';
//class instances
let chatUI = new UIClass(chatList);
let chatroom = new chatRoom('general', username);
//rendering the class instances
chatroom.getChats(data => chatUI.render(data));
