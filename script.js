const xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(xhr.responseText);
    document.body.innerHTML = xhr.responseText;
}

xhr.open("GET", "ajax_info.txt");
xhr.send();

if(xhr.status !== 200){
    console.log(xhr.status + " " + xhr.statusText);
} else {
    console.log(xhr.responseText);
}