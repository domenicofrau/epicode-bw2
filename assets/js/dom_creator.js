
/*
    Funzione per caricare la traccia dal localstorage
*/
window.onscroll= function(){
    const header = document.querySelector('#center_nav');
    let top = window.scrollY;
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


function Utente(nome, traccia, artista, album, tempo,img){
    this.nome = nome;
    this.traccia = traccia;
    this.artista = artista;
    this.album = album;
    this.tempo = tempo;
    this.immagine = img;
}

function creaUtente() {
    let out = []
    out.push(new Utente("Marco", "Free", "Florence + The Machine", "Dance Fever", "1 ora"))
    out.push(new Utente("Antonio", "Portapalazzo", "Willie Peyote", "Sindrome di Tôret", "3 ore"))
    out.push(new Utente("Marta", "El Tiempo", "Kermesse", "Igloo 10, Part 2", "2 ore"))
    out.push(new Utente("Lino", "Moon Dude", "Jessica Pratt", "On Your Own Love Again","2 giorni","https://metadata-static.plex.tv/4/people/40fe22ff957809226d7aabfbd2413d06.jpg"))
    return out
}

function creaSidebarSX() {
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

function creaSidebarDX() {
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

function creaPlayer() {
    document.getElementById("footer").innerHTML += `<div class="d-flex justify-content-between align-items-center position-sticky bottom-0" id="player-spotify">
    <div class="d-flex justify-content-around">
        <div>
            <img id="cover-player" src="./assets/img/logo-player.png" alt="" />
        </div>
        <div id="text-player">
            <h4 id="title-song">Forza Roma!</h4>
            <p id="sub-test_player">Lorenzo Pellegrini</p>
        </div>

        <button id="heart-player" onclick="selectedHeart()">
            <i class="bi bi-heart d-flex" id="heart"></i>
            <i class="bi bi-heart-fill d-none" id="heart-fill"></i>
        </button>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div id="controls_player">
            <div id="modal-placeholder" class="d-none">
                <p><span id="replace-txt-added" class="d-none">Added to</span><span id="replace-txt-removed"
                        class="">Removed from</span> liked songs</p>
            </div>
            <button onclick="selectedBtnAudioColorizeGreen(this)"><i
                    class="bi bi-shuffle icons-play"></i></button>
            <button onclick="selectedBtnAudioColorizeGreen(this)"><i
                    class="bi bi-skip-start-fill icons-play"></i></button>
            <button id="btn_play-pause--audio" onclick="selectedPlayPause()">
                <i class="bi bi-play-circle" id="btn_play"></i>
                <i class="bi bi-pause-circle-fill d-none" id="btn_pause"></i>
            </button>
            <button onclick="selectedBtnAudioColorizeGreen(this)"><i
                    class="bi bi-skip-end-fill icons-play"></i></button>
            <button onclick="selectedBtnAudioColorizeGreen(this)"><i
                    class="bi bi-repeat icons-play"></i></button>
        </div>

        <div id="filler-bar">
            <span id="progress-time">0:00</span>

            <span id="container_filler-bar">
                <span id="filler_bar-time"></span>
            </span>

            <span id="duration-time">0:30</span>
        </div>
    </div>
    <div class="d-flex justify-content-end align-items-center" id="player_right-side">
        <button class="iconPlayer"><i class="bi bi-mic"></i></button>
        <button class="iconPlayer"><i class="bi bi-list"></i></button>

        <div>
            <div class="d-none" id="modal_control-device">
                <div id="current_device">
                    <div>
                        <i class="bi bi-laptop"></i>
                    </div>
                    <div>
                        <h3>Current device</h3>
                        <p>This computer</p>
                    </div>
                </div>
                <div id="error_device">
                    <h4>No other device found</h4>
                </div>
                <div id="control_wifi">
                    <div><i class="bi bi-wifi"></i></div>
                    <div>
                        <h4>check your WiFi</h4>
                        <p>Connect the devices you are using to the same WiFi.</p>
                    </div>
                </div>
                <div id="control_another-device">
                    <div><i class="bi bi-pc-display"></i></div>
                    <div>
                        <h4>Play from an other device.</h4>
                        <p>It will automatically appear here.</p>
                    </div>
                </div>
                <div id="control_speaker">
                    <div><i class="bi bi-power"></i></div>
                    <div>
                        <h4>Restart your speaker</h4>
                        <p>Or follow setup instructions if it's a new device</p>
                    </div>
                </div>
                <div id="modal-sub">
                    <h4>Don't see your device?</h4>
                    <i class="bi bi-box-arrow-up-right"></i>
                </div>

                <div id="square-rotate"></div>
            </div>
            <button><i class="bi bi-pc-display-horizontal" onclick="selectedModalControlDevic()"></i></button>
        </div>

        <button id="btn_mute-audio" onclick="selectedBtnMuteAudio(), mutedAudio()">
            <i class="bi bi-volume-up" id="btn_volume-up"></i>
            <i class="bi bi-volume-mute d-none" id="btn_volume-mute"></i>
        </button>
        <input type="range" class="form-range" id="volume" max="1" min="0" step="0.01"
            onchange="changeVolume(this.value)" />
        <button class="iconPlayer" onclick="espandi()"><i class="bi bi-arrows-angle-expand"></i></button>
    </div>
    <audio class="player" src=""></audio>
</div>`
}

function creaAmico(utenti) {
    let out = ""
    utenti.forEach(utente => {
        out += `<!----- Amico ----->
        <div class="amico container d-flex">
            <div class="col-2">
                <img src="${utente.immagine}" alt="" class="amico_img rounded-circle">
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
creaPlayer()
// caricaTraccia()
