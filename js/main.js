var checkbox = document.querySelector('#headerCheck')
var painelBranco = document.querySelector('.painelBranco')
var telas = document.querySelector('.telas')
var opcoesScroll = document.querySelector('.opcoesScroll')
var opcoesPerfil = document.querySelector('.opcoesPerfil')
var seta = document.querySelector('#seta')


function teste1() {

    if(checkbox.checked){
        
        painelBranco.style.margin = '100vh 0px 0px 0px'
        telas.style.margin = '100vh 0px 0px 0px'
        opcoesScroll.style.bottom = '-100vh'
        opcoesPerfil.style.display = 'block'
        seta.src = 'img/keyboard_arrow_up-24px.svg'
        
    }
    else{
        
        painelBranco.style.margin = '80px 0px 0px 0px'
        telas.style.margin = '15px 0px 0px 0px'
        opcoesScroll.style.bottom = '75px'
        opcoesPerfil.style.display = 'none'
        seta.src = 'img/arrow-Down.svg'

    }

}