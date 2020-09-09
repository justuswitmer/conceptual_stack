$(document).ready(onReady);

function onReady() {
    console.log('jquery ready!!');
    getSongs();
    addSongs();
}

function addSongs() {
    let objectToSend = {
        test: 'testData'
    }
    $.ajax({
        method: "POST",
        url: "/songs",
        data: objectToSend
    }).then(function (response) {
        console.log('back from POST with', response);
    }).catch(function (err) {
        alert("error")
        console.log(err);
    }) // end AJAX
} // end addSongs

function getSongs() {
    $.ajax({
        method: "GET",
        url: "/songs"
    }).then(function (response) {
        console.log('back from GET with', response);
    }).catch(function (err) {
        alert("error")
        console.log(err);
    }) // end AJAX
} // end getSongs

