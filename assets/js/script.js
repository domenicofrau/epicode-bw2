/*
 *      EXTRA:
 *          - Aggiungere pagina di login per ottenere il nome dell'utente
 *            e popolarlo all'interno della web app
 *
 */
var requestOptions = { method: 'GET', redirect: 'follow' };


let saluto = document.getElementById("benvenuto")
let giorno = new Date();

let annuncio = document.getElementById("annunci")



async function cambioAnnuncio() {
    let sponsor = [60114382,75621062]
    try {
        let prom = getAlbum(sponsor[random(sponsor.length)])
        prom.then((album) => {
          console.log(album)
            creaAnnuncio(album)
        })
      } catch (e) {
        console.log("Errore: " + e)
      }
}


function creaAnnuncio(album) {
    let titolo = document.getElementById("annuncio_titolo")
    let img = document.getElementById("annuncio_img")
    let descrizione = document.getElementById("annuncio_testo")
    let bt_share = document.getElementById("annuncio_share")
    let bt_play = document.getElementById("annuncio_play")
    bt_share.href = album.share
    img.src = album.cover_xl
    titolo.innerHTML = album.title
    descrizione.innerHTML = `Scopri il nuovo album di ${album.artist.name} con ${album.nb_tracks} tracce inedite`
}




async function getAlbum(id) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, requestOptions)
    return response.json()
}





cambioAnnuncio()





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