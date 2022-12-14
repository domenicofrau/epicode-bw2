let asideSX = document.getElementById("left")
asideSX.innerHTML += `<div id="sticky">

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

let asideDX = document.getElementById("right")
asideDX.innerHTML += `<div id="sticky">

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

    <!----- Amico ----->
    <div class="amico container d-flex">
        <div>
            <img src="assets/img/39425.jpg" alt="" class="amico_img rounded-circle">
        </div>
        <div>
            <h4 class="amico_nome m-0">Charlie Hookham</h4>
            <p class="amico_titolo m-0">in Camera • Yumi Zouma</p>
            <i class="bi bi-disc"></i><span class="amico_album ml-1">EP III</span>
        </div>
        <div>
            <p class="amico_tempo">4 ore</p>
        </div>
    </div>
</section>
</div>
`