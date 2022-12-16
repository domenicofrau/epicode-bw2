/*
 *      EXTRA:
 *          - Aggiungere pagina per i brani preferiti 
 *
 */
var requestOptions = { method: 'GET', redirect: 'follow' };
let annuncio = document.getElementById("annunci")
let giorno = new Date();
let saluto = document.getElementById("benvenuto")
let unicamente = document.getElementById("unicamentePerTe")
let artisti = document.getElementById("artistiDelGiorno")
let perTe = document.getElementById("perTe")
let playlist = document.getElementById("playlist")


let lista_sponsor = [331985167, 366045987, 361295177, 384939427, 384830817, 359324967, 321660907, 342410187, 368969877, 361543547]
let lista_album = [331985167, 366045987, 361295177, 384939427, 384939227, 377360177, 384966267, 383623707, 376156727, 379835987, 371519127, 331966797, 111239, 11898198, 77648602, 59853992, 226069]
let lista_artisti = [52115362, 13087269, 3239781, 7371074, 73023, 7917, 7979, 3315, 390032, 2279, 6168800, 10666535, 1288678, 2276, 8513, 3305, 3164, 390032, 57573792, 1, 11, 847, 848, 4050205, 416239, 384236, 10583405, 176]

function creaArtista(posizione) {
    try {
        let prom = getArtist(lista_artisti[random(lista_artisti.length)])
        prom.then((artista) => {
            posizione.innerHTML += `<div class="card tessera artista p-1">
                                        <a href="artist.html" onclick="salvaArtista(${artista.id})">
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
            posizione.innerHTML += `<div class="card tessera album p-1">
                                        <a href="album.html" onclick="salvaAlbum(${album.id})">
                                            <img src="${album.cover_xl}" class="card-img-top shadow  " alt="...">
                                            <img class="hide position-absolute top-50 end-0 m-4" src="assets/img/play_btn.png" alt="">
                                            <div class="card-body p-0 py-3">
                                                <h5 class="card-title">
                                                    ${album.title}
                                                </h5>
                                                <p class="card-text">
                                                    ${album.artist.name}
                                                </p>
                                            </div>
                                        </a>
                                    </div>`
        })
    } catch (e) {
        console.log("Errore: " + e)
    }
}

function creaAnnuncio(posizione) {
    try {
        let prom = getAlbum(lista_sponsor[random(lista_sponsor.length)])
        prom.then((album) => {
            posizione.innerHTML += `
            <div class="card px-3 py-4">
            <div class="row">
                <div class="col-3">
                    <img src="${album.cover_xl}" class="img-fluid " alt="Card title" id="annuncio_img">
                </div>
                <div class="col-9">
                    <div class="card-body">
                        <a href="album.html" onclick="salvaAlbum(${album.id})"><h1 class="card-title" id="annuncio_titolo">${album.title}</h1></a>
                        <p class="card-text" id="annuncio_testo">${`Scopri il nuovo singolo "${album.title}" di ${album.artist.name}`}</p>
                        <div id="contenitore_annuncio" class="mt-5">
                            <button type="button" style="width: 100px;"
                                class="btn rounded-pill p-1 py-3 px-3 mx-2 btn-success"
                                id="annuncio_play"><a href="album.html" onclick="salvaAlbum(${album.id})">Play</a></button>
                            <button type="button" style="width: 100px;"
                                class="annuncio_segui btn rounded-pill py-3 px-3 ms-2 btn-dark"
                                id="annuncio_share"><a href="${album.share}" target="_blank">Segui</a></button>
                            <button type="button" style="width: 100px;"
                                class="btn rounded-pill py-2 btn-dark" id="annuncio_dots">···</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        })
    } catch (e) {
        console.log("Errore: " + e)
    }
}

function salvaAlbum(id) {
    localStorage.setItem("id_album", id)
}

function salvaArtista(id) {
    localStorage.setItem("id_artist", id)
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
creaAnnuncio(annuncio)

for (let i = 0; i < 2; i++) {
    creaAlbum(perTe)
    creaArtista(perTe)
}

for (let i = 0; i < 4; i++) {
    creaAlbum(unicamente)
    creaArtista(artisti)

}
