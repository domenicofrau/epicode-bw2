
/*
    Funzione per caricare la traccia dal localstorage
*/
window.onscroll= function(){
    const header = document.querySelector('#center_nav');
    let top = window.scrollY;
    console.log(top)
    if (top > 40){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}




function caricaTraccia() {
    let player = document.getElementById("player")
    player.src = window.localStorage.getItem("traccia")
}


let amici = creaAmico(creaUtente())


function Utente(nome, traccia, artista, album, tempo,){
    this.nome = nome;
    this.traccia = traccia;
    this.artista = artista;
    this.album = album;
    this.tempo = tempo;
}

function creaUtente() {
    let out = []
    out.push(new Utente("Marco", "Free", "Florence + The Machine", "Dance Fever", "1 ora"))
    out.push(new Utente("Antonio", "Portapalazzo", "Willie Peyote", "Sindrome di Tôret", "3 ore"))
    out.push(new Utente("Marta", "El Tiempo", "Kermesse", "Igloo 10, Part 2", "2 ore"))
    out.push(new Utente("Lino", "Moon Dude", "Jessica Pratt", "On Your Own Love Again","2 giorni"))
    return out
}

function creaSidebarSX(params) {
    document.getElementById("left").innerHTML += `<div id="sticky">

    <section id="menu_sinistra">
        <nav>
            <div id="menu_principale">
                <ul class="list-unstyled">

                    <li id="icon-home">
                        <a href="home.html">
                            <img class="icon-home-side" src="assets/img/icone/sidebar_home.png" alt="">
                            <img class="icon-home-side-hide" src="assets/img/icone/sidebar_home_hover.png" alt="">
                                Home
                        </a>
                    </li>

                    <li id="icon-search">
                        <a href="search.html">
                            <img class="icon-home-side" src="assets/img/icone/sidebar_search.png" alt="">
                            <img class="icon-home-side-hide" src="assets/img/icone/sidebar_search_hover.png" alt="">
                                Cerca
                        </a>
                    </li>

                    <li id="icon-library">
                        <a href="#">
                            <img class="icon-home-side" src="assets/img/icone/sidebar_library.png" alt="">
                            <img class="icon-home-side-hide" src="assets/img/icone/sidebar_library_hover.png" alt="">
                                La tua libreria
                        </a>
                    </li>
                </ul>
            </div>
            <div id="menu_secondario">
                <ul class="list-unstyled logo">
                    <li><a href="#"><i class="bi bi-plus piu"></i>Crea playlist</a></li>
                    <li><a href="#"><i class="bi bi-heart-fill cuore"></i>Brani che ti piacciono</a></li>
                    <li><a href="#"><i class="bi bi-bookmark-fill podcast"></i>I tuoi episodi</a></li>
                </ul>
            </div>
        </nav>
    </section>

    <section id="playlist">
        <hr>
        <ul class="list-unstyled">
            <li><a href=""></a>&#127764; alle 3 di notte</li>
            <li><a href=""></a>Be The Young</li>
            <li><a href=""></a>".."cit.Kimono (lug-ago 2022)"</li>
            <li><a href=""></a>trip mood &#127757;</li>
            <li><a href=""></a>main character energy</li>
            <li><a href=""></a>the fucking mood</li>
            <li><a href=""></a>landing page</li>
            <li><a href=""></a>Francesco Guccini Mix</li>
            <li><a href=""></a>Fabrizio De André</li>
            <li><a href=""></a>css radio</li>
            <li><a href=""></a>Chill Out</li>
            <li><a href=""></a>fiesta</li>
            <li><a href=""></a>rap italiano</li>
            <li><a href=""></a>good fellas</li>
            <li><a href=""></a>Top Christmas Song! &#127877;&#127876;</li>
        </ul>
    </section>
</div>`  
}

function creaSidebarDX(params) {
    document.getElementById("right").innerHTML += `<div id="sticky">
    
    <!----- Head Amico ----->
    <section id="amico_head" class="d-flex justify-content-between">
        <h3 class="d-inline">Attività Amici</h3>
        <span>
            <img class="icon-sidebar" src="./assets/img/icone/sidebar_add_friend.png" alt="">
            <img class="icon-sidebar" src="./assets/img/icone/sidebar_quit.png" alt="">
        </span>
    </section>
    
    <!----- Amici ----->
    <section>
    
    ${amici}
        
    </section>
    </div>
    `
    
}

function creaAmico(utenti) {
    let out = ""
    utenti.forEach(utente => {
        out += `<!----- Amico ----->
        <div class="amico container d-flex">
            <div class="col-2">
                <img src="https://picsum.photos/200" alt="" class="amico_img rounded-circle">
            </div>
            <div class="col-6">
                <h4 class="amico_nome m-0">${utente.nome}</h4>
                <p class="amico_titolo m-0">${utente.traccia} • ${utente.artista}</p>
                <i class="bi bi-disc"></i><span class="amico_album ml-1">${utente.album}</span>
            </div>
            <div class="col-4">
                <p class="amico_tempo">${utente.tempo}</p>
            </div>
        </div>`
    });
    return out
}
  
function cambiaUtente() {
    document.getElementById("profilo").innerHTML = `<img src="https://picsum.photos/200" class="d-inline rounded-circle" alt="profilo_img" id="profilo_img">${window.localStorage.getItem("nome")}`
}

function esci() {
    window.localStorage.setItem("nome", "")
}

cambiaUtente()
creaSidebarSX()
creaSidebarDX()
// caricaTraccia()
