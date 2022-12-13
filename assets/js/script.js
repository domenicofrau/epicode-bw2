/*
 *      EXTRA:
 *          - Aggiungere pagina di login per ottenere il nome dell'utente
 *            e popolarlo all'interno della web app
 *
 */
var requestOptions = { method: 'GET', redirect: 'follow' };
let annuncio = { titolo: document.getElementById("annuncio_titolo"), img: document.getElementById("annuncio_img"), descrizione: document.getElementById("annuncio_testo"), bt_share: document.getElementById("annuncio_share"), bt_play: document.getElementById("annuncio_play") }
let giorno = new Date();
let saluto = document.getElementById("benvenuto")
let unicamente = document.getElementById("unicamentePerTe")
let artisti = document.getElementById("artistiDelGiorno")

async function getAlbum(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, requestOptions)
    return response.json()
}

async function getArtist(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, requestOptions)
    return response.json()
}


function creaArtista() {
    let sponsor = [52115362, 13087269, 3239781, 7371074, 73023, 7917]

    for (let i = 0; i < 4; i++) {
        try {
            let prom = getArtist(sponsor[random(sponsor.length)])
            prom.then((artista) => {
                artisti.innerHTML += `<div class="card tessera artista p-3"><a href=""><img src="${artista.picture_xl}" class="card-img-top shadow rounded-cirlce" alt="..."><div class="card-body p-0 py-3"><h5 class="card-title">${artista.name}</h5><p class="card-text">Artista</p></div></a></div>`
            })
        } catch (e) {
            console.log("Errore: " + e)
        }
        
    }
}

function creaAlbum() {
    let sponsor = [331985167, 366045987, 361295177, 384939427]

    for (let i = 0; i < 4; i++) {
        try {
            let prom = getAlbum(sponsor[random(sponsor.length)])
            prom.then((album) => {
                unicamente.innerHTML += `<div class="card tessera album p-3"><a href=""><img src="${album.cover_xl}" class="card-img-top shadow  " alt="..."><div class="card-body p-0 py-3"><h5 class="card-title">${album.title}</h5><p class="card-text">${album.artist.name}</p></div></a></div>`
            })
        } catch (e) {
            console.log("Errore: " + e)
        }
        
    }
}







creaAlbum()
creaArtista()




function cambioAnnuncio() {
    let sponsor = [331985167, 366045987, 361295177, 384939427]
    try {
        let prom = getAlbum(sponsor[random(sponsor.length)])
        prom.then((album) => {
            salvaAlbum(album.id)
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



cambiaSaluto()
cambioAnnuncio()