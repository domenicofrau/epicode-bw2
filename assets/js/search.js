var requestOptions = { method: 'GET', redirect: 'follow' };

let contenitore = document.getElementById("contenitore")
let barra = document.getElementById("searchBar")
let titolo = document.getElementById("titolo")


function search(key) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${key}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            creaTracce(result)
        })
        .catch(error => console.log('Errore: ', error));
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

    let array = album.data

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
        cell4.innerHTML = `<td class="col-1 text-center">${traccia.album.title}</td>`
        cell5.innerHTML = `<td class="col-1 text-end"><i class="bi bi-heart"></i></td>`
        cell6.innerHTML = `<td class="col-1 text-end">${Math.floor(traccia.duration / 60)}</td>`
        cell7.innerHTML = `<td class="col-1 text-center"><span class="dots">···</span> </td>`
    };


}



function creaRicerca(key) {
    titolo.innerHTML = "Brani"
    contenitore.innerHTML = `<table  id="corpo_tabella">
    <thead>
        <tr>
            <th class="col-1 text-white  noSpace" scope="col-1">#</th>
            <th class="col-1 text-white  noSpace" scope="col-1"></th>
            <th class="col-3 text-white " scope="col-7">TITOLO</th>
            <th class="col-3 text-white space" scope="col-3">ALBUM</th>
            <th class="col-1 text-white  noSpace" scope="col-1"></th>
            <th class="col-1 text-white" scope="col-1"><i class="bi bi-clock"></i></th>
            <th class="col-1 text-white  noSpace" scope="col-1"></th>
        </tr>
    </thead>
    <tbody class="table-group-divider row">

    </tbody>
</table>`
    search(key)
}




function creaCategorie() {
    titolo.innerHTML = "Sfoglia tutto"
    contenitore.innerHTML = ""
    let categorie = [
        "./assets/img/search/01.png",
        "./assets/img/search/02.png",
        "./assets/img/search/03.png",
        "./assets/img/search/04.png",
        "./assets/img/search/05.png",
        "./assets/img/search/06.png",
        "./assets/img/search/07.png",
        "./assets/img/search/08.png",
        "./assets/img/search/09.png",
        "./assets/img/search/10.png",
        "./assets/img/search/11.png",
        "./assets/img/search/12.png",
        "./assets/img/search/13.png",
        "./assets/img/search/14.png",
        "./assets/img/search/15.png",
        "./assets/img/search/16.png",
        "./assets/img/search/17.png",
        "./assets/img/search/18.png",
        "./assets/img/search/19.png",
        "./assets/img/search/20.png",
        "./assets/img/search/21.png",
        "./assets/img/search/22.png",
        "./assets/img/search/23.png",
        "./assets/img/search/24.png",
        "./assets/img/search/25.png",
        "./assets/img/search/26.png",
        "./assets/img/search/27.png",
        "./assets/img/search/28.png",
        "./assets/img/search/29.png",
        "./assets/img/search/30.png",
        "./assets/img/search/31.png",
        "./assets/img/search/32.png",
        "./assets/img/search/33.png",
        "./assets/img/search/34.png",
        "./assets/img/search/35.png",
        "./assets/img/search/36.png",
        "./assets/img/search/37.png",
        "./assets/img/search/38.png",
        "./assets/img/search/39.png",
        "./assets/img/search/40.png",
        "./assets/img/search/41.png",
        "./assets/img/search/42.png",
        "./assets/img/search/43.png",
        "./assets/img/search/44.png",
        "./assets/img/search/45.png",
        "./assets/img/search/46.png",
        "./assets/img/search/47.png",
        "./assets/img/search/48.png",
        "./assets/img/search/49.png",
        "./assets/img/search/50.png",
        "./assets/img/search/51.png",
        "./assets/img/search/52.png",
        "./assets/img/search/53.png",
        "./assets/img/search/54.png",
        "./assets/img/search/55.png",
        "./assets/img/search/56.png",
        "./assets/img/search/57.png",
        "./assets/img/search/58.png",
        "./assets/img/search/59.png",
        "./assets/img/search/60.png"]
    categorie.forEach(cover => {
        try {
            contenitore.innerHTML += `
            <a class="card tessera mb-4 rounded-pill" href="">
            <img src="${cover}" class="card-img-top shadow" alt="...">
            </a>
            `
        } catch (e) {
            console.log("Errore: ", e)
        }
    }

    )
}


barra.addEventListener("keyup", (event) => {
    if (barra.value === "") {
        creaCategorie()
        document.title = `Ricerca - Spotify`
    } else {
        creaRicerca(barra.value)
        document.title = `${barra.value} - Spotify`
    }
});


/*
 *  AVVIO FUNZIONI
 */
creaCategorie()