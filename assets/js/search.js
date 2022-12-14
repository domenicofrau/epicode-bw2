var requestOptions = { method: 'GET', redirect: 'follow' };

let contenitore = document.getElementById("contenitore")
let barra = document.getElementById("searchBar")
let titolo = document.getElementById("titolo")


function search(key) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${key}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log("Ricerca: ",result)
    })
    .catch(error => console.log('error', error));
}





function creaRicerca(key) {
    titolo.innerHTML = "Brani"
    contenitore.innerHTML = ""
    search(key)
}




function creaCategorie() {
    titolo.innerHTML = "Sfoglia tutto"
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
            console.log("ERRORE: ", e)
        }
    }

    )
}


barra.addEventListener("keyup", (event) => {
    console.log(barra.value)
    
    if (barra.value == "") {
        creaCategorie()
    } else{
        creaRicerca(barra.value)
    }
  });


/*
 *  AVVIO FUNZIONI
 */
// creaCategorie()