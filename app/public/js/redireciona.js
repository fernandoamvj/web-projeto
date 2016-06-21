function redireciona() {
    var valida = true;
    var ids = [];
    ids[0] = document.getElementById('negado');
    ids[1] = document.getElementById('sucesso');
    ids[2] = document.getElementById('redireciona');
    if (valida == true) {
        ids[1].classList.add('visualiza');
        setTimeout(function() {
            ids[1].classList.remove('visualiza');
            ids[2].classList.add('visualiza');

        }, 3000);
    } else {
        ids[0].classList.add('visualiza');
    }
}

redireciona();
