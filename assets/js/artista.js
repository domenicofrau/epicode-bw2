var requestOptions = { method: 'GET', redirect: 'follow' };


let id = localStorage.getItem("id_artist")

let banner = {
    background: document.getElementById("banner-img"),
    titolo: document.getElementById("titolo-banner"),
    ascolti: document.getElementById("ascolti")
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
    let tabella = document.getElementById("artista_tabella_tracce");

    let array = tracce.data

    for (let i = 0; i < array.length; i++) {
        const traccia = array[i];
    
        let tracciaOut = JSON.stringify(traccia)

        // let riga = lista.insertRow(lista.rows.length);
        // var cell1 = riga.insertCell(0);
        // var cell2 = riga.insertCell(1);
        // var cell3 = riga.insertCell(2);
        // var cell4 = riga.insertCell(3);

        /*
            <span class="col-1 text-white" scope="row"><button class="carica" onclick="lancia('${traccia.preview}')">${i+1}</button><img src="" alt=""></span>
            <span class="col-8 text-white">ocean avenue</span>
            <span class="col-4 text-white">22222</span>
            <span class="col-1 text-white">4:4</span>
        */

    
        // tabella.innerHTML =    `
        //                         // <tr>
        //                         //     <td class="col-1 text-white" scope="row"><button class="carica" onclick='salvaTraccia(${tracciaOut})'>${i+1}</button><img class="img_tabella" src="${traccia.album.cover_xl}" alt=""></td>
        //                         //     <td class="col-8 text-white">${traccia.title}</td>
        //                         //     <td class="col-4 text-white">${traccia.rank}</td>
        //                         //     <td class="col-1 text-white">${Math.floor(traccia.duration / 60)}</td>
        //                         //     <td></td>
        //                         //     <td></td>
        //                         //     <td></td>
        //                         // </tr>
        //                         // `
        
        
        //`<span class="col-1 text-white" scope="row"><button class="carica" onclick='salvaTraccia(${tracciaOut})'>${i+1}</button><img class="img_tabella" src="${traccia.album.cover_xl}" alt=""></span>`;
        //cell2.innerHTML = `<span class="col-8 text-white">${traccia.title}</span>`;
        //cell3.innerHTML = `<span class="col-4 text-white">${traccia.rank}</span>`;
        //cell4.innerHTML = `<span class="col-1 text-white">${Math.floor(traccia.duration / 60)}</span>`;
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