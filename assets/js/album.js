var requestOptions = { method: 'GET', redirect: 'follow' };

let id = localStorage.getItem("id_album")

let banner = {
    background: document.getElementById("album_banner"),
    img: document.getElementById("album_img"),
    titolo: document.getElementById("album_titolo"),
    descrizione: document.getElementById("album_description"),
    tipo: document.getElementById("album_type"),
    artist_img: document.getElementById("artist_img")
}

function salvaTraccia(traccia) {
    traccia = JSON.stringify(traccia)
    window.localStorage.setItem("traccia", traccia)
    if (document.getElementById("footer").innerHTML == "") {
        creaPlayer()
    }
    playA()
}

function creaTracce(album) {
    let lista = document.getElementById("corpo_tabella");

    let array = album.tracks.data

    for (let i = 0; i < array.length; i++) {
        const traccia = array[i];

        let tracciaOut = JSON.stringify(traccia)

        let riga = lista.insertRow(lista.rows.length);
        riga.className = "riga_tabella"
        var cell1 = riga.insertCell(0);
        var cell2 = riga.insertCell(1);
        var cell3 = riga.insertCell(2);
        var cell4 = riga.insertCell(3);
        var cell5 = riga.insertCell(4);
        var cell6 = riga.insertCell(5);
        var cell7 = riga.insertCell(6);

        cell1.innerHTML = `<th class="col-1 text-center" scope="row"><span class="hide-th">${i + 1}</span><a class="hide-icon" onclick='salvaTraccia(${tracciaOut})'></a></th>`
        cell3.innerHTML = `<td class="col-6">${traccia.title}</td>`
        cell4.innerHTML = `<td class="col-1 text-center">${traccia.rank}</td>`
        cell5.innerHTML = `<td class="col-1 text-end"><i class="bi bi-heart"></i></td>`
        cell6.innerHTML = `<td class="col-1 text-end">${Math.floor(traccia.duration / 60)}</td>`
        cell7.innerHTML = `<td class="col-1 text-center"><span class="dots">···</span> </td>`

    };


}

function creaBanner(album) {
    let data = new Date(album.release_date)
    banner.img.src = album.cover_xl
    banner.titolo.innerHTML = album.title
    banner.artist_img.src = album.artist.picture_xl
    album.record_type == "single" ? banner.tipo.innerHTML = "Singolo" : banner.tipo.innerHTML = "Album";
    album.nb_tracks > 1 ? banner.descrizione.innerHTML = `<a href="artist.html" onclick='localStorage.setItem("id_artist", ${album.artist.id})'>${album.artist.name} </a>• ${data.getFullYear()} • ${album.nb_tracks} brani, ${Math.floor(album.duration / 60)} min.` : banner.descrizione.innerHTML = `<a href="artist.html" onclick='localStorage.setItem("id_artist", ${album.artist.id})'>${album.artist.name} </a>• ${data.getFullYear()} • ${album.nb_tracks} brano, ${Math.floor(album.duration / 60)} min.`
}

try {
    let prom = getAlbum(id)
    prom.then((album) => {
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