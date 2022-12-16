var requestOptions = { method: 'GET', redirect: 'follow' };
const colorThief = new ColorThief();
const img = new Image();

let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
let id = localStorage.getItem("id_artist")
let lista_artisti = [52115362, 13087269, 3239781, 7371074, 73023, 7917, 7979, 3315, 390032, 2279, 6168800, 10666535, 1288678, 2276, 8513, 3305, 3164, 390032, 57573792, 1, 11, 847, 848, 4050205, 416239, 384236, 10583405, 176]
let banner = {
    background: document.getElementById("banner-img"),
    titolo: document.getElementById("titolo-banner"),
    ascolti: document.getElementById("ascolti"),
    totale: document.getElementById("banner_artista")
}


function salvaTraccia(traccia) {
    traccia = JSON.stringify(traccia)
    window.localStorage.setItem("traccia", traccia)
    if (document.getElementById("footer").innerHTML == "") {
        creaPlayer()
    }
    playA()
}

function creaTracce(tracce) {
    let lista = document.getElementById("corpo_tabella");

    let array = tracce.data

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
        cell2.innerHTML = `<td class="col-1 not"><img src="${traccia.album.cover_xl}"></td>`
        cell3.innerHTML = `<td class="col-6">${traccia.title}</td>`
        cell4.innerHTML = `<td class="col-1 text-center">${traccia.rank}</td>`
        cell5.innerHTML = `<td class="col-1 text-end"><i class="bi bi-heart"></i></td>`
        cell6.innerHTML = `<td class="col-1 text-end">${Math.floor(traccia.duration / 60)}</td>`
        cell7.innerHTML = `<td class="col-1 text-center"><span class="dots">···</span> </td>`

    };


}

async function creaBanner(artista) {
    banner.background.src = artista.picture_xl
    banner.titolo.innerHTML = artista.name
    banner.ascolti.innerHTML = `${artista.nb_fan} ascoltatori mensili`

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(artista.picture_xl);

    img.addEventListener('load', () => {
        let colori = colorThief.getColor(img)
        banner.totale.style.boxShadow = `0px 100px 150px 0px rgb(${colori[0]}, ${colori[1]}, ${colori[2]}, 0.55)`;
    });
}

try {
    let prom = getArtist(id)
    prom.then((artista) => {
        creaBanner(artista)
        topTrack(artista.tracklist)
        document.title = `${artista.name} - Spotify`
    })
    artisti_consigliati(lista_artisti)
} catch (e) {
    console.log("Errore: " + e)
}

function topTrack(url) {
    try {
        let prom = getTopTrack(url)
        prom.then((tracce) => {
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

function random(max) {
    return Math.floor(Math.random() * max);
}

async function getTopTrack(url) {
    const response = await fetch(url, requestOptions)
    return response.json()
}

function artisti_consigliati(lista) {
    for (let i = 0; i < 4; i++) {
        const artista = lista[[random(lista.length)]];
        try {
            let prom = getArtist(artista)
            prom.then((artista) => {
                let perTe = document.getElementById("perTe")
                perTe.innerHTML += `<div class="card tessera artista p-2">
                 <a href="#" onclick='localStorage.setItem("id_artist", ${artista.id}); location.reload()'>
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
}

