document.addEventListener('DOMContentLoaded', function() {
    var btnExp = document.querySelector('#bt-exp')
    var menuSide = document.querySelector('.menu-lateral')

    document.querySelector('.cabecalho-menu-item[href="#resumo"]').addEventListener('click', function(event) {
        event.preventDefault();

        menuSide.classList.toggle('expandir');
    });
});