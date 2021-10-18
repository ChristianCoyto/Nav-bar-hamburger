function hamburgerMenu (panelBtn, divContainer, menulink){

    document.addEventListener('click', (e)=>{
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            document.querySelector(divContainer).classList.toggle('is-active');
            document.querySelector(panelBtn).classList.toggle('is-active');
        }

        if (e.target.matches(menulink)){
            document.querySelector(divContainer).classList.remove('is-active');
            document.querySelector(panelBtn).classList.remove('is-active');
        }
    })
};

document.addEventListener('DOMContentLoaded', (e)=>{
    hamburgerMenu(".panel-btn", ".div_contenedor", ".div_contenedor ul li a");
});
