//dom queries
let chatList = document.querySelector(".chat-list");
let newChatForm = document.querySelector(".new-chat");
let newNameForm = document.querySelector(".new-name");
let updateMsg = document.querySelector(".update-msg");
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
//class instances
let chatUI = new UIClass(chatList);
let chatroom = new chatRoom('general', 'anonymous');
//rendering the class instances
chatroom.getChats(data => chatUI.render(data));
