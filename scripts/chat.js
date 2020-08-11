//adding new chat docs
//setting up real time listener to get new chats
//updating the username
//updating the room
//where is used when we have to give a condition to take out data from firebase
//orderBy orders the data accesing according to your given parameter
//dochanges() brings all the changes in an array that occurs for each snapshot
class chatRoom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        let now = new Date();
        let chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now) 
        }
        let response = this.chats.add(chat);
        return response

    }
    //docChanges gives an array of all the changes
    async getChats(callback){
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === "added"){
                    //update ui
                    callback(change.doc.data());
                }
            });
        })
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log("room updated");
        if(this.unsub){
            this.unsub();
        }

    }
}
