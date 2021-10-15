let principal = $('#principal');
let notice = $('#notice');

let url = window.location.href;
let swDirect = '/20213-PWA-U2-P2-JJBM/sw.js';

if(navigator.serviceWorker){
    console.log('SW DISPONIBLE');

    if (url.includes('localhost')){
        swDirect='/sw.js'
    } 
    navigator.serviceWorker.register(swDirect);
}else{
    console.log('SW NO DISPONIBLE')
}


$('.btn-seguir').on('click', function(e){
    e.preventDefault();
    console.log(
        'Pulsaste ver mas'
    );

    principal.fadeOut(function(){
        notice.slideDown(1000);
    });
})

$('.btn-regresar').on('click', function(e){
    e.preventDefault();
    notice.fadeOut('slow', function(){
        principal.slideDown(1000);
    });
})
