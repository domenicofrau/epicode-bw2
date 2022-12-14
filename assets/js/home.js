/*
 *      EXTRA:
 *          - Aggiungere pagina per i brani preferiti 
 *
 */
var requestOptions = { method: 'GET', redirect: 'follow' };
let annuncio = { titolo: document.getElementById("annuncio_titolo"), img: document.getElementById("annuncio_img"), descrizione: document.getElementById("annuncio_testo"), bt_share: document.getElementById("annuncio_share"), bt_play: document.getElementById("annuncio_play") }
let giorno = new Date();
let saluto = document.getElementById("benvenuto")
let unicamente = document.getElementById("unicamentePerTe")
let artisti = document.getElementById("artistiDelGiorno")
let perTe = document.getElementById("perTe")
let playlist = document.getElementById("playlist")


let lista_sponsor = [331985167, 366045987, 361295177, 384939427]
let lista_album = [331985167, 366045987, 361295177, 384939427]
let lista_artisti = [52115362, 13087269, 3239781, 7371074, 73023, 7917]

function creaPlaylist() {
    playlist.innerHTML += `<div class="container-fluid card mb-3 px-0 mx-2 col-3 playlist-card"><div class="row g-0"><div class="col-md-3"><img src="assets/img/playlist/01.png" class="rounded-start p-0 shadow cover-playlist" alt="..."></div><div class="col-md-8 background-card">
            <div class="card-body p-2">
                <h5 class="card-title mt-2">Coding Music</h5>
            </div>
        </div>
        <img class="btn-playlist position-absolute top-50 end-0 m-2" src="assets/img/play_btn.png"alt="">
        </div>
        </div>`
}

function creaArtista(posizione) {
    try {
        let prom = getArtist(lista_artisti[random(lista_artisti.length)])
        prom.then((artista) => {
            posizione.innerHTML += `<div class="card tessera artista p-3">
                                        <a href="">
                                                <img src="${artista.picture_xl}" class="card-img-top shadow rounded-cirlce" alt="...">
                                                <img class="hide position-absolute top-50 end-0 m-4" src="assets/img/play_btn.png" alt="">
                                                <div class="card-body p-0 py-3">
                                                <h5 class="card-title">${artista.name}</h5>
                                                <p class="card-text">Artista</p>
                                            </div>
                                        </a>
                                    </div>`
        })
    } catch (e) {
        console.log("Errore: " + e)
    }
}

function creaAlbum(posizione) {
    try {
        let prom = getAlbum(lista_album[random(lista_album.length)])
        prom.then((album) => {
            posizione.innerHTML += `<div class="card tessera album p-3"><a href="album.html" onclick="salvaAlbum(${album.id})"><img src="${album.cover_xl}" class="card-img-top shadow  " alt="..."><img class="hide position-absolute top-50 end-0 m-4" src="assets/img/play_btn.png" alt=""><div class="card-body p-0 py-3"><h5 class="card-title">${album.title}</h5><p class="card-text">${album.artist.name}</p></div></a></div>`
        })
    } catch (e) {
        console.log("Errore: " + e)
    }
}

function creaAnnuncio() {
    try {
        let prom = getAlbum(lista_sponsor[random(lista_sponsor.length)])
        prom.then((album) => {
            annuncio.bt_share.href = album.share
            annuncio.img.src = album.cover_xl
            annuncio.titolo.innerHTML = album.title
            annuncio.descrizione.innerHTML = `Scopri il nuovo singolo "${album.title}" di ${album.artist.name}`
        })
    } catch (e) {
        console.log("Errore: " + e)
    }
}

function salvaAlbum(id) {
    localStorage.setItem("id_album", id)
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function cambiaSaluto() {
    let ora = giorno.getHours()
    let min = giorno.getMinutes()

    switch (true) {
        case ((ora >= 6) && (ora < 12)):
            saluto.innerHTML = "Buongiorno"
            break;

        case ((ora >= 12) && (ora < 16)):
            saluto.innerHTML = "Buon Pomeriggio"
            break;

        case ((ora >= 16) && (ora <= 23 && min <= 59)):
            saluto.innerHTML = "Buonasera"
            break;

        case ((ora >= 0) && (ora < 6)):
            saluto.innerHTML = "Buonanotte"
            break;

        default:
            saluto.innerHTML = "Benvenuto"
            break;
    }
}

/*
 *  FUNZIONI DI FETCH
 */
async function getAlbum(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, requestOptions)
    return response.json()
}

async function getArtist(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, requestOptions)
    return response.json()
}

/*
 *  AVVIO FUNZIONI
 */
cambiaSaluto()
creaAnnuncio()

for (let i = 0; i < 6; i++) {
    creaPlaylist()
}

for (let i = 0; i < 2; i++) {
    creaAlbum(perTe)
    creaArtista(perTe)
}

for (let i = 0; i < 4; i++) {
    creaAlbum(unicamente)
    creaArtista(artisti)
    
}
