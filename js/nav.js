document.body.innerHTML += '\
<nav class="navbar navbar-expand-lg fixed-top">\
        <div class="container-fluid">\
            <a class="navbar-brand ms-3" href="index.html">\
                <img src="img/teamcreja.png"  height="40px"alt="">\
                Team Cherry\
            </a>\
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
            </button>\
            <div class="collapse navbar-collapse" id="navbarSupportedContent">\
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5" >\
                    <li class="nav-item">\
                    <a class="nav-link " aria-current="page" href="index.html">Home</a>\
                    </li>\
                    <li class="nav-item">\
                    <a class="nav-link" href="sobre.html">Sobre </a>\
                    </li>\
                    <li class="nav-item " id="contato">\
                    <a class="nav-link" href="contacto.html">Contato</a>\
                    </li>\
                    <li class="nav-item dropdown me-3">\
                    <a class="nav-link dropdown-toggle" id="drop" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\
                        Jogos\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a class="dropdown-item" href="silksong.html">Silksong</a></li>\
                        <li><a class="dropdown-item" href="hk.html">Hollow Knight</a></li>\
                        <li><hr class="dropdown-divider"></li>\
                        <li><a class="dropdown-item" href="hungry.html">Hungry Knight</a></li>\
                    </ul>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>'