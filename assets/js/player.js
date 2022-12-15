// PLAYER


function espandi() {
    if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
    document.exitFullscreen();
    }
}

// funzione per play
function playA() {
    let song = JSON.parse(window.localStorage.getItem("traccia"))
    // console.log(song)

    let aux = document.querySelector(".player");
    if (aux.paused || aux.currentTime === 0 || aux.ended) {
        avviaTraccia(aux, song)
    } else {
        fermaTraccia(aux)
        avviaTraccia(aux, song)
    }
}

function avviaTraccia(player, traccia) {
    player.src = traccia.preview;
    player.play();
    seconds = 1;
    let fillerBarElement = document.querySelector("#filler_bar-time");
    fillerBarElement.style.animation = 'none';
    fillerBarElement.offsetHeight; /* trigger reflow */
    fillerBarElement.style.animation = null; 

    setStartFillerBar();
    setNameArtistSong(traccia.artist.name, traccia.title_short, traccia.album.cover_xl);
}

function fermaTraccia(player) {
    player.pause();
    setPauseFillerBar();
}



function selectedHeart() {
    let btnHeart = document.getElementById("heart");
    let btnHeartFill = document.getElementById("heart-fill");
    let modalPlaceholder = document.getElementById("modal-placeholder");
    let replaceTxtAdded = document.querySelector("#replace-txt-added");
    let replaceTxtRemoved = document.querySelector("#replace-txt-removed");

    btnHeart.classList.toggle("d-none");
    btnHeartFill.classList.toggle("d-none");

    // Al primo click, mi deve apparire il placeholder con la scritta "aggiunto"
    modalPlaceholder.classList.toggle("d-none");
    // Dopo pochi secondi, mi deve sparí il placeholder
    const showPlaceholdet = setTimeout(() => {
        modalPlaceholder.classList.add("d-none");
    }, 3000);

    console.log(replaceTxtRemoved.className);

    // quando clicco di nuovo sul cuoricino, deve comparire il placeholder
    // con la scritta "rimosso"

    replaceTxtAdded.classList.toggle("d-none");
    replaceTxtRemoved.classList.toggle("d-none");
}


function selectedPlayPause() {
    let btnPlay = document.getElementById("btn_play");
    let btnPause = document.getElementById("btn_pause");
    let aux = document.querySelector(".player");
    if (!aux.paused) {
        fermaTraccia(aux)
    } else{
        aux.play()
        setStartFillerBar();
    }
    btnPlay.classList.toggle("d-none");
    btnPause.classList.toggle("d-none");
}

function selectedBtnMuteAudio() {
    let btnVolumeUp = document.querySelector("#btn_volume-up");
    let btnVolumeMute = document.querySelector("#btn_volume-mute");

    btnVolumeMute.classList.toggle("d-none");
    btnVolumeUp.classList.toggle("d-none");
}

function selectedBtnAudioColorizeGreen(event) {
    console.log(event);
    let btnSelected = event.querySelector(".bi");

    console.log(btnSelected);

    btnSelected.classList.toggle("btn_colorize-green");
}

function selectedModalControlDevic() {
    let modalElement = document.getElementById("modal_control-device");

    modalElement.classList.toggle("d-none");
}

let seconds = 1;
let clearIntervalID = 0;

function setStartFillerBar() {
    const progressTimeElement = document.querySelector("#progress-time");
    const fillerBarElement = document.querySelector("#filler_bar-time");

    fillerBarElement.classList.add("animation_filler-bar");

    const changeSeconds = setInterval(() => {
        if (seconds < 10) {
            seconds = "0" + `${seconds}`;
        }

        progressTimeElement.innerHTML = `0:${seconds}`;
        seconds++;

        clearIntervalID = changeSeconds;

        if (seconds === 31) {
            clearInterval(changeSeconds);
            seconds = 1;
        }
        // console.log(typeof progressTimeElement.innerHTML);
    }, 1000);

    if (fillerBarElement.className.includes("paused-animation_filler-bar")) {
        fillerBarElement.classList.remove("paused-animation_filler-bar");
    }
}

// Devi fare in modo che l'animazione e il tempo si fermino

// L'animazione ora si deve fermare, senza toccare il tempo.
// Devo trovare un modo per passare l'ID del clearInterval in modo dinamico

function setPauseFillerBar() {
    let fillerBarElement = document.querySelector("#filler_bar-time");

    fillerBarElement.classList.toggle("paused-animation_filler-bar");

    clearInterval(clearIntervalID);
}

// ora devi fare in modo che il titolo e l'artista cambi di testo al click

function setNameArtistSong(artist, song, coverImg) {
    document.querySelector("#cover-player").src = coverImg;
    document.querySelector("#sub-test_player").innerHTML = artist;
    document.querySelector("#title-song").innerHTML = song;
}

let newObj;

// Funzione che recupera l'url dell'audio cliccato
function getAudioObj(audioPreview) {
    let audioObj = new Audio(audioPreview);
    console.log(audioObj);

    newObj = audioObj;
}

// Funzione che cambia il volume dell'audio cliccato
function changeVolume(rangeValue) {
    let playerElement = document.querySelector(".player");
    playerElement.volume = rangeValue;
}

// Funzione che al click muta e smuta l'audio
let audioState = false;
function mutedAudio() {
    let playerElement = document.querySelector(".player");

    if (audioState === false) {
        playerElement.muted = true;
        audioState = true;
        console.log(audioState);
    } else {
        playerElement.muted = false;
        audioState = false;
        console.log(audioState);
    }
}

  // creare una funzione che resetta
