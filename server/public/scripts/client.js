
$(document).ready(onReady);

function onReady() {
    console.log('jquery ready!!');
    getSongs();
    $("#addSongButton").on('click', addSongs);
}

function addSongs() {
    let objectToSend = {
        rank: $("#rankIn").val(),
        artist: $("#artistIn").val(),
        track: $("#trackIn").val(),
        published: $("#publishedIn").val()
    }
    $.ajax({
        method: "POST",
        url: "/songs",
        data: objectToSend
    }).then(function (response) {
        console.log('back from POST with', response);
        getSongs();
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
        let el = $('#songsOut');
        el.empty();
        for (let i = 0; i < response.length; i++) {
            el.append(`<li>
            ${response[i].rank} |
            ${response[i].artist} ---
            ${response[i].track} ---
            ${response[i].published.split('T')[0]}</li>
            `);
        }
    }).catch(function (err) {
        alert("error")
        console.log(err);
    }) // end AJAX
} // end getSongs

