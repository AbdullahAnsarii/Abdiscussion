//render chat templates to DOM
//clear messages when room changes

class UIClass {
    constructor(list){
        this.list = list
    }
    render(data){
        let html =
        `
        <li class = "list-group-items">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${data.created_at.toDate()}</div>
        </li>

        `
        this.list.innerHTML += html;
    }
}