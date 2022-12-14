var requestOptions = { method: 'GET', redirect: 'follow' };


let id = localStorage.getItem("id_artist")

let banner = {
    background: document.getElementById("banner-img"),
    titolo: document.getElementById("titolo-banner"),
    ascolti: document.getElementById("ascolti")
}



function creaTracce(tracce) {
    let lista = document.getElementById("artist-lista-tracce");

    let array = tracce.data

    for (let i = 0; i < array.length; i++) {
        const traccia = array[i];
    
        console.log(traccia)
        let riga = lista.insertRow(lista.rows.length);
        var cell1 = riga.insertCell(0);
        var cell2 = riga.insertCell(1);
        var cell3 = riga.insertCell(2);
        var cell4 = riga.insertCell(3);

        cell1.innerHTML = `<td class="col-1 text-white" scope="row"> ${i+1} <span><img src="${traccia.album.cover_xl}" class="w-100" alt=""></span></td>`;
        cell2.innerHTML = `<span><h5 class="col-4 " id="track_title">${traccia.title_short}</h5><p class="" id="artist_name">${traccia.artist.name}</p></span>`;
        cell3.innerHTML = traccia.rank;
        cell4.innerHTML = Math.floor(traccia.duration / 60);
    };


}

function creaBanner(artista) {
    banner.background.src = artista.picture_xl
    banner.titolo.innerHTML = artista.name
    banner.ascolti.innerHTML = `${artista.nb_fan} ascoltatori mensili`
}

try {
    let prom = getArtist(id)
    prom.then((artista) => {
        console.log(artista)
        creaBanner(artista)
        topTrack(artista.tracklist)
        document.title = `${artista.name} - Spotify`
        // creaTracce(album)
    })
} catch (e) {
    console.log("Errore: " + e)
}

function topTrack(url) {
    try {
        let prom = getTopTrack(url)
        prom.then((tracce) => {
            console.log(tracce)
            creaTracce(tracce)
        })
    } catch (e) {
        console.log("Errore: " + e)
    }
    
}



async function getArtist(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, requestOptions)
    return response.json()
}

async function getTopTrack(url) {
    const response = await fetch(url, requestOptions)
    return response.json()
}