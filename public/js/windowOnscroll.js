window.onscroll = () => {
    // find navbar
    const navbar = document.getElementById('navbar');

    // find animated content
    const animated = document.getElementsByClassName('animated')

    // get navbar position
    let navbarPosition = document.getElementById('nav-position').offsetTop;
    
    // apply/remove navbar class as needed
    if(window.scrollY >= navbarPosition){
        navbar.classList.add('sticky-nav')
    } else {
        navbar.classList.remove('sticky-nav')
    }
    
    // get postition and apply/remove class as needed for each animated piece of content
    for(let el of animated){
        if(window.scrollY >= (el.offsetTop + 10) && el.offsetTop > 0){
            el.classList.add('animating')
        } else {
            el.classList.remove('animating')
        }
    }
}