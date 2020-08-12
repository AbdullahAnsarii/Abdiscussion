//render chat templates to DOM
//clear messages when room changes

class UIClass {
    constructor(list){
        this.list = list
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        let when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(), {addSuffix: true}
        )
        let html =
        `
        <li class = "list-group-items">
            <span class="username">${data.username}:</span>
            <span class="message">${data.message}</span>
            <div class="time">${when}</div>
        </li>

        `
        this.list.innerHTML += html;
    }
}