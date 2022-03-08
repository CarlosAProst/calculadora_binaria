const { ipcRenderer } = require('electron');


window.addEventListener('DOMContentLoaded', () => {

    const btnCerrar = document.getElementById('btn-cerrar');
    const btnAbout = document.getElementById('btn-about');

    btnCerrar.addEventListener('click', () => {
        ipcRenderer.send('cerrar-ventana');
    });

    btnAbout.addEventListener('click', () => {
        ipcRenderer.send('ventana-about');
    });

});