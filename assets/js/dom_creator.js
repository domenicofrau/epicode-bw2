let amici = [
    new Utente("Germano", "Ave o Maria", "Chierichetti Papali", "Canzoni di Parrocchia", "1 ora", "https://www.kulturjam.it/wp-content/uploads/Germano-Mosconi-il-giornalista-che-fece-la-storia-della-bestemmia-2.jpg"),
    new Utente("Antonino", "Portapalazzo", "Willie Peyote", "Sindrome di Tôret", "3 ore", "https://www.ristorantiweb.com/wp-content/uploads/sites/9/2018/09/Antonino-Cannavacciuolo.jpg"),
    new Utente("Federico", "Come Together", "The Beatles", "Abbey Road", "2 ore", "https://am4pap001files.storage.live.com/y4mGKt9X2YQPfmP_1VadK8rRPydrOnq_dN1Avg5nJMyrBRGmGc6efI0V2AmZx62xrf-_XHEQH3kuvPe0ZA4po7IlTaG1sCf7Ghzu7pcELg-sMgDgX_MW1NG8ho-XORM6DYDAxrl6SKy8GpEkbPVn3-Tj8WKiHDHgeOgAlzEebRenbwzQ3mtrd8E_wqorTEMNMKd?encodeFailures=1&width=322&height=273"),
    new Utente("Lino", "Moon Dude", "Jessica Pratt", "On Your Own Love Again", "2 giorni", "https://metadata-static.plex.tv/4/people/40fe22ff957809226d7aabfbd2413d06.jpg")
]

window.onscroll = function () {
    let header = document.querySelector('#center_nav');
    let top = window.scrollY;
    if (top > 40) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


function caricaTraccia() {
    let player = document.getElementById("player")
    player.src = window.localStorage.getItem("traccia")
}

function Utente(nome, traccia, artista, album, tempo, img) {
    this.nome = nome;
    this.traccia = traccia;
    this.artista = artista;
    this.album = album;
    this.tempo = tempo;
    this.immagine = img;
}

function aggiungiUtente(that) {
    amici.push(new Utente(that.nome.value, that.traccia.value, that.artista.value, that.album.value, "1 ora", that.img.value))
    document.getElementById("right").innerHTML = ``
    creaSidebarDX(creaAmico(amici))
}


function creaAmico(amici) {
    let out = ""
    amici.forEach(utente => {
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

function creaSidebarDX(lista_amici) {
    document.getElementById("right").innerHTML += `
    <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <!-- nome, traccia, artista, album, tempo, img -->
                <form action="#" onsubmit="aggiungiUtente(this)">
                    <div class="mb-3">
                        <label for="nome" class="col-form-label">Nome:</label>
                        <input type="text" class="form-control" id="nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="traccia" class="col-form-label">Traccia:</label>
                        <input type="text" class="form-control" id="traccia" required>
                    </div>
                    <div class="mb-3">
                        <label for="artista" class="col-form-label">Artista:</label>
                        <input type="text" class="form-control" id="artista" required>
                    </div>
                    <div class="mb-3">
                        <label for="album" class="col-form-label">Album:</label>
                        <input type="text" class="form-control" id="album" required>
                    </div>
                    <div class="mb-3">
                        <label for="img" class="col-form-label">Immagine:</label>
                        <input type="text" class="form-control" id="img" required>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Aggiungi Amico</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    <div id="sticky">
    
    <!----- Head Amico ----->
    <section id="amico_head" class="d-flex justify-content-between">
        <h3 class="d-inline">Attività Amici</h3>
        <span>
            <a data-bs-toggle="modal" data-bs-target="#addUser"><img class="icon-sidebar" src="./assets/img/icone/sidebar_add_friend.png" alt=""></a>
            <img class="icon-sidebar" src="./assets/img/icone/sidebar_quit.png" alt="">
        </span>
    </section>
    
    <!----- Amici ----->
    <section>
    
    ${lista_amici}
        
    </section>
    </div>
    `

}

function creaPlayer() {
    let traccia = JSON.parse(window.localStorage.getItem("traccia"))
    try {
        if (traccia) {

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
                    <i class="bi bi-play-circle-fill d-none" id="btn_play"></i>
                    <i class="bi bi-pause-circle " id="btn_pause"></i>
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
        <audio class="player" src="${traccia.preview}"></audio>
            </div>`

            setNameArtistSong(traccia);
        } else {
            document.getElementById("footer").innerHTML = ""
        }
    } catch (e) {
        console.log("Errore: " + e)
    }

}



function cambiaUtente() {
    document.getElementById("profilo").innerHTML = `<img src="https://picsum.photos/200" class="d-inline rounded-circle" alt="profilo_img" id="profilo_img">${window.localStorage.getItem("nome")}`
}

function esci() {
    window.localStorage.setItem("nome", "")
}

creaPlayer()
cambiaUtente()
creaSidebarSX()
creaSidebarDX(creaAmico(amici))
// caricaTraccia()
