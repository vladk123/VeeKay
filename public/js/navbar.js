window.onscroll = () => {
    const navbar = document.getElementById('navbar');

    // get position
    let navbarPosition = document.getElementById('nav-position').offsetTop;
    
    // apply/remove class as needed
    if(window.scrollY >= navbarPosition){
        navbar.classList.add('sticky-nav')
    } else {
        navbar.classList.remove('sticky-nav')
    }
}