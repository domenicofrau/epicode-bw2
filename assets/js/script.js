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
let perTe = document.getElementById("perTe")

/*
-------------------------------------------------------------------------------------
INIZIO VANEGGIO NOTTURNO DI DOME
-------------------------------------------------------------------------------------
*/


let copertine = document.getElementById("sfogliaTutto")
var coverArray = new Array();

coverArray[0] = new Image();
coverArray[0] = "./assets/img/search/01.png";

coverArray[1] = new Image();
coverArray[1] = "./assets/img/search/02.png";

coverArray[2] = new Image();
coverArray[2] = "./assets/img/search/03.png";

coverArray[3] = new Image();
coverArray[3] = "./assets/img/search/04.png";

coverArray[4] = new Image();
coverArray[4] = "./assets/img/search/05.png";

coverArray[5] = new Image();
coverArray[5] = "./assets/img/search/06.png";

coverArray[6] = new Image();
coverArray[6] = "./assets/img/search/07.png";

coverArray[7] = new Image();
coverArray[7] = "./assets/img/search/08.png";

coverArray[8] = new Image();
coverArray[8] = "./assets/img/search/09.png";

coverArray[9] = new Image();
coverArray[9] = "./assets/img/search/10.png";

coverArray[10] = new Image();
coverArray[10] = "./assets/img/search/11.png";

coverArray[11] = new Image();
coverArray[11] = "./assets/img/search/12.png";

coverArray[12] = new Image();
coverArray[12] = "./assets/img/search/13.png";

coverArray[13] = new Image();
coverArray[13] = "./assets/img/search/14.png";

coverArray[14] = new Image();
coverArray[14] = "./assets/img/search/15.png";

coverArray[15] = new Image();
coverArray[15] = "./assets/img/search/16.png";

coverArray[16] = new Image();
coverArray[16] = "./assets/img/search/17.png";

coverArray[17] = new Image();
coverArray[17] = "./assets/img/search/18.png";

coverArray[18] = new Image();
coverArray[18] = "./assets/img/search/19.png";

coverArray[19] = new Image();
coverArray[19] = "./assets/img/search/20.png";

coverArray[20] = new Image();
coverArray[20] = "./assets/img/search/21.png";

coverArray[21] = new Image();
coverArray[21] = "./assets/img/search/22.png";

coverArray[22] = new Image();
coverArray[22] = "./assets/img/search/23.png";

coverArray[23] = new Image();
coverArray[23] = "./assets/img/search/24.png";

coverArray[24] = new Image();
coverArray[24] = "./assets/img/search/25.png";

coverArray[25] = new Image();
coverArray[25] = "./assets/img/search/26.png";

coverArray[26] = new Image();
coverArray[26] = "./assets/img/search/27.png";

coverArray[27] = new Image();
coverArray[27] = "./assets/img/search/28.png";

coverArray[28] = new Image();
coverArray[28] = "./assets/img/search/29.png";

coverArray[29] = new Image();
coverArray[29] = "./assets/img/search/30.png";

coverArray[30] = new Image();
coverArray[30] = "./assets/img/search/31.png";

coverArray[31] = new Image();
coverArray[31] = "./assets/img/search/32.png";

coverArray[32] = new Image();
coverArray[32] = "./assets/img/search/33.png";

coverArray[33] = new Image();
coverArray[33] = "./assets/img/search/34.png";

coverArray[34] = new Image();
coverArray[34] = "./assets/img/search/35.png";

coverArray[35] = new Image();
coverArray[35] = "./assets/img/search/36.png";

coverArray[36] = new Image();
coverArray[36] = "./assets/img/search/37.png";

coverArray[37] = new Image();
coverArray[37] = "./assets/img/search/38.png";

coverArray[38] = new Image();
coverArray[38] = "./assets/img/search/39.png";

coverArray[39] = new Image();
coverArray[39] = "./assets/img/search/40.png";

coverArray[40] = new Image();
coverArray[40] = "./assets/img/search/41.png";

coverArray[41] = new Image();
coverArray[41] = "./assets/img/search/42.png";

coverArray[42] = new Image();
coverArray[42] = "./assets/img/search/43.png";

coverArray[43] = new Image();
coverArray[43] = "./assets/img/search/44.png";

coverArray[44] = new Image();
coverArray[44] = "./assets/img/search/45.png";

coverArray[45] = new Image();
coverArray[45] = "./assets/img/search/46.png";

coverArray[46] = new Image();
coverArray[46] = "./assets/img/search/47.png";

coverArray[47] = new Image();
coverArray[47] = "./assets/img/search/48.png";

coverArray[48] = new Image();
coverArray[48] = "./assets/img/search/49.png";

coverArray[49] = new Image();
coverArray[49] = "./assets/img/search/50.png";

coverArray[50] = new Image();
coverArray[50] = "./assets/img/search/51.png";

coverArray[51] = new Image();
coverArray[51] = "./assets/img/search/52.png";

coverArray[52] = new Image();
coverArray[52] = "./assets/img/search/53.png";

coverArray[53] = new Image();
coverArray[53] = "./assets/img/search/54.png";

coverArray[54] = new Image();
coverArray[54] = "./assets/img/search/55.png";

coverArray[55] = new Image();
coverArray[55] = "./assets/img/search/56.png";

coverArray[56] = new Image();
coverArray[56] = "./assets/img/search/57.png";

coverArray[57] = new Image();
coverArray[57] = "./assets/img/search/58.png";

coverArray[58] = new Image();
coverArray[58] = "./assets/img/search/59.png";

coverArray[59] = new Image();
coverArray[59] = "./assets/img/search/60.png";



function creaSfoglia() {
    coverArray.forEach(cover => {

        try {
            copertine.innerHTML += `
            <a class="card tessera mb-4" href="">
            <img src="${cover}" class="card-img-top shadow" alt="...">
            </a>
            `
        } catch (e) {
            console.log("ERRORE: " , e)
        }
    }

)}

/*
-------------------------------------------------------------------------------------
FINE VANEGGIO NOTTURNO DI DOME
-------------------------------------------------------------------------------------
*/

let lista_sponsor = [331985167, 366045987, 361295177, 384939427]
let lista_album = [331985167, 366045987, 361295177, 384939427]
let lista_artisti = [52115362, 13087269, 3239781, 7371074, 73023, 7917]


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
creaSfoglia()

for (let i = 0; i < 2; i++) {
    creaAlbum(perTe)
    creaArtista(perTe)
}

for (let i = 0; i < 4; i++) {
    creaAlbum(unicamente)
    creaArtista(artisti)
    
}
