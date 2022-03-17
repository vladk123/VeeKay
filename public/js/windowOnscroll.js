window.onscroll = () => {
    /////////// Make navbar sticky when appropriate
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


    /////////// Highlighting Nav Text
    // find passing points
    const mainPos = document.getElementById('main-content').offsetTop;
    const aboutPos = document.getElementById('about').offsetTop + mainPos;
    const projectsPos = document.getElementById('projects').offsetTop + mainPos;
    const contactPos = document.getElementById('contact').offsetTop + mainPos;
    // find nav links
    const aboutLink = document.getElementById('about-nav-link')
    const projectsLink = document.getElementById('projects-nav-link')
    const contactLink = document.getElementById('contact-nav-link')
    // current location (because of existing ~5% padding, we have to account for that, 
        //and should just generally be covering the approximate area before it highlights)
    const currInnerHeight = window.innerHeight;
    const currPos = window.scrollY + (currInnerHeight * 0.20)
    
    if(currPos >= contactPos){
        aboutLink.classList.remove('current-location')
        projectsLink.classList.remove('current-location')
        contactLink.classList.add('current-location')
    } else if(currPos >= projectsPos){
        aboutLink.classList.remove('current-location')
        projectsLink.classList.add('current-location')
        contactLink.classList.remove('current-location')
    } else if(currPos >= aboutPos){
        aboutLink.classList.add('current-location')
        projectsLink.classList.remove('current-location')
        contactLink.classList.remove('current-location')
    } else {
        aboutLink.classList.remove('current-location')
        projectsLink.classList.remove('current-location')
        contactLink.classList.remove('current-location')
    }
}