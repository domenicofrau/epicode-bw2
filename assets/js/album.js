var requestOptions = { method: 'GET', redirect: 'follow' };


let id = localStorage.getItem("id_album")

let banner = {
    background: document.getElementById("album_banner"),
    img: document.getElementById("album_img"),
    titolo: document.getElementById("album_title"),
    descrizione: document.getElementById("album_description"),
    tipo: document.getElementById("album_type"),
    artist_img: document.getElementById("artist_img")
}

function lancia(url) {
    let player = document.getElementById("player")
    player.setAttribute("autoplay", "")
    window.localStorage.setItem("traccia", url)
    player.src = url
}


function creaTracce(album) {
    let lista = document.getElementById("lista_tracce");


    let array = album.tracks.data

    for (let i = 0; i < array.length; i++) {
        const traccia = array[i];
    
        // console.log(traccia)
        let riga = lista.insertRow(lista.rows.length);
        var cell1 = riga.insertCell(0);
        var cell2 = riga.insertCell(1);
        var cell3 = riga.insertCell(2);
        var cell4 = riga.insertCell(3);

        cell1.innerHTML = `<button class="carica" onclick="lancia('${traccia.preview}')">${i+1}</button>`;
        cell2.innerHTML = `<span><h5 class="col-4 " id="track_title">${traccia.title_short}</h5><p class="" id="artist_name">${traccia.artist.name}</p></span>`;
        cell3.innerHTML = traccia.rank;
        cell4.innerHTML = Math.floor(traccia.duration / 60);
    };


}

function creaBanner(album) {
    let data = new Date(album.release_date)
    banner.img.src = album.cover_xl
    banner.titolo.innerHTML = album.title
    banner.titolo.innerHTML = album.title
    banner.artist_img.src = album.artist.picture_xl
    if (album.record_type == "single") {
        banner.tipo.innerHTML = "Singolo"
    } else {
        banner.tipo.innerHTML = "Album"
    }

    if (album.nb_tracks > 1) {
        banner.descrizione.innerHTML = `${album.artist.name} • ${data.getFullYear()} • ${album.nb_tracks} brani, ${Math.floor(album.duration / 60)} min.`
    } else {
        banner.descrizione.innerHTML = `${album.artist.name} • ${data.getFullYear()} • ${album.nb_tracks} brano, ${Math.floor(album.duration / 60)} min.`
    }
}

try {
    let prom = getAlbum(id)
    prom.then((album) => {
        // console.log(album)
        creaBanner(album)
        creaTracce(album)
        document.title = `${album.title} - Spotify`

    })
} catch (e) {
    console.log("Errore: " + e)
}

async function getAlbum(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, requestOptions)
    return response.json()
}