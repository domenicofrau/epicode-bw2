
let amici = creaAmico(creaUtente())

function Utente(nome, traccia, artista, album, tempo){
    this.nome = nome;
    this.traccia = traccia;
    this.artista = artista;
    this.album = album;
    this.tempo = tempo;
}

function creaUtente() {
    let out = []
    out.push(new Utente("Marco", "viola", "fedez", "Viola", "3 ore"))
    out.push(new Utente("Antonio", "viola", "fedez", "Viola", "3 ore"))
    out.push(new Utente("Luca", "viola", "fedez", "Viola", "3 ore"))
    out.push(new Utente("Giovanni", "viola", "fedez", "Viola", "3 ore"))
    return out
}

function creaSidebarSX(params) {
    document.getElementById("left").innerHTML += `<div id="sticky">

    <section id="menu_sinistra">
        <nav>
            <div id="menu_principale">
                <ul class="list-unstyled">
                    <li><a href="home.html"><i class="bi bi-house-door-fill"></i>Home</a></li>
                    <li><a href="search.html"><i class="bi bi-search"></i>Cerca</a></li>
                    <li><a href="#"><i class="bi bi-collection-play"></i>La tua libreria</a></li>
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
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
            <li><a href=""></a>lorem</li>
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
            <i class="bi bi-person-add"></i>
            <i class="bi bi-x"></i>
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
    let out
    utenti.forEach(utente => {
        console.log(utente)
        out += `<!----- Amico ----->
        <div class="amico container d-flex">
            <div>
                <img src="https://picsum.photos/200" alt="" class="amico_img rounded-circle">
            </div>
            <div>
                <h4 class="amico_nome m-0">${utente.nome}</h4>
                <p class="amico_titolo m-0">${utente.traccia} • ${utente.artista}</p>
                <i class="bi bi-disc"></i><span class="amico_album ml-1">${utente.album}</span>
            </div>
            <div>
                <p class="amico_tempo">4 ore</p>
            </div>
        </div>`
    });
    return out
}
  
function cambiaUtente() {
    document.getElementById("profilo").innerHTML = `<img src="https://picsum.photos/200" class="d-inline rounded-circle" alt="profilo_img" id="profilo_img">${window.localStorage.getItem("nome")}`
}

cambiaUtente()
creaSidebarSX()
creaSidebarDX()
