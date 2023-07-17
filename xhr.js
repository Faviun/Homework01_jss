// API JsonPlaceHolder Service

const baseUrl = "https://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

class XhrService {
    static getPosts() {
        xhr.open("Get", baseUrl + "/posts", false);
        xhr.send();
        return xhr.response;
    }
    static getComments() {
        xhr.open("Get", baseUrl + "/comments", false);
        xhr.send();
        return xhr.response;
    }
    static getAlbums() {
        xhr.open("Get", baseUrl + "/albums", false);
        xhr.send();
        return xhr.response;
    }
    static getPhotos() {
        xhr.open("Get", baseUrl + "/photos", false);
        xhr.send();
        return xhr.response;
    }
    static getTodos() {
        xhr.open("Get", baseUrl + "/todos", false);
        xhr.send();
        return xhr.response;
    }
    static getUsers() {
        xhr.open("Get", baseUrl + "/users", false);
        xhr.send();
        return xhr.response;
    }
}

const resultOfRequestPosts = XhrService.getPosts();
// console.log(JSON.parse(resultOfRequestPosts));
const arrayPosts = JSON.parse(resultOfRequestPosts);

const resultOfRequestComments = XhrService.getComments();
// console.log(JSON.parse(resultOfRequestComments));
const arrayComments = JSON.parse(resultOfRequestComments);

const resultOfRequestAlbums = XhrService.getAlbums();
// console.log(JSON.parse(resultOfRequestAlbums));
const arrayAlbums = JSON.parse(resultOfRequestAlbums);

const resultOfRequestPhotos = XhrService.getPhotos();
// console.log(JSON.parse(resultOfRequestPhotos));
const arrayPhotos = JSON.parse(resultOfRequestPhotos);

const resultOfRequestTodos = XhrService.getTodos();
// console.log(JSON.parse(resultOfRequestTodos));
const arrayTodos = JSON.parse(resultOfRequestTodos);

const resultOfRequest = XhrService.getUsers();
// console.log(JSON.parse(resultOfRequest));
const arrayUsers = JSON.parse(resultOfRequest);

function f1(){
document.body.innerHTML = `<div class="headButtons">
<input class="but" type="button" value="Get posts" onclick="butPosts()">
<input class="but" type="button" value="Get comments" onclick="butComments()">
<input class="but" type="button" value="Get albums" onclick="butAlbums()">
<input class="but" type="button" value="Get photos" onclick="butPhotos()">
<input class="but" type="button" value="Get todos" onclick="butTodos()">
<input class="but" type="button" value="Get users" onclick="butUsers()">
</div>`
}

f1();

function butPosts(){
    f1();
    document.body.innerHTML += `<div class="container">${arrayPosts.map((item) => `
    <div>
        <p>Body: ${item.body}</p>
        <p>Title: ${item.title}</p>
    </div>
`).join('')}</div>`;
}


function butComments(){
    f1();
    document.body.innerHTML += `<div class="container">${arrayComments.map((item) => `
    <div>
        <p>Body: ${item.body}</p>
        <p>Name: ${item.name}</p>
    </div>
`).join('')}</div>`;
}

function butAlbums(){
    f1();
    document.body.innerHTML += `<div class="container">${arrayAlbums.map((item) => `
    <div>
        <p>Title: ${item.title}</p>
    </div>
`).join('')}</div>`;
}

function butPhotos(){
    f1();
    document.body.innerHTML += `<div class="container">${arrayPhotos.map((item) => `
    <div>
        <a href="https://${item.thumbnailUrl}">${item.thumbnailUrl}</a>
        <p>Title: ${item.title}</p>
        <a href="https://${item.url}">${item.url}</a>
    </div>
`).join('')}</div>`;
}

function butTodos(){
    f1();
    document.body.innerHTML += `<div class="container">${arrayTodos.map((item) => `
    <div>
        <p>Title: ${item.title}</p>
    </div>
`).join('')}</div>`;
}

function butUsers(){
    f1();
    document.body.innerHTML += `<div class="container">${arrayUsers.map((item) => `
    <div>
        <p>ID: ${item.id}</p>
        <p>Name: ${item.name}</p>
        <p>Email: ${item.phone}</p>
        <a href="https://${item.website}">${item.website}</a>
    </div>
`).join('')}</div>`;
}