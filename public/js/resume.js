///////////Toggling turning on/off light
const toggleWindow = () => {
    const getWindow = document.getElementsByClassName("window")
    const ranNum = Math.floor(Math.random() * getWindow.length)
    // if about to turn off light, remove character
    if(getWindow[ranNum].classList.contains("window-on")){
        const windowChar = getWindow[ranNum].querySelector(".character")
        windowChar.classList.remove("character-on-right")
        windowChar.classList.remove("character-on-left")
    }
    // toggle light
    getWindow[ranNum].classList.toggle("window-on")
    // getWindow[ranNum].classList.add("window-on")
}

///////////Toggling character walking
const toggleCharacter = () => {
    const getWindow = document.getElementsByClassName("window")
    const direction = Math.floor(Math.random()*10) 
    const ranNum = Math.floor(Math.random() * getWindow.length)
    // if windows are on, show character
    if(getWindow[ranNum].classList.contains("window-on")){
        const windowChar = getWindow[ranNum].querySelector(".character")
        // make sure no existing character
        if(!windowChar.classList.contains("character-on-right") && !windowChar.classList.contains("character-on-left"))
        // choosing direction that character will move
        if(direction > 5){
            windowChar.classList.add("character-on-right") 
        } else {
            windowChar.classList.add("character-on-left") 
        }
    } else {
        // if not on, might as well remove any existing character classes, if any
        const windowChar = getWindow[ranNum].querySelector(".character")
        windowChar.classList.remove("character-on-right")
        windowChar.classList.remove("character-on-left")
    }
     
}

let callWindowLights = window.setInterval(() => {
    toggleWindow()
  }, 1500);

let callCharacter = window.setInterval(() => {
    toggleCharacter()
  }, 1500);

  
/////////// Function to auto-scroll to correct part of nav menu
const scrollNav = (activeText) => {
    const activeNavText = document.querySelector(activeText)
    // activeNavText.scrollIntoView({behavior: "smooth", block: "center"})
    if(activeNavText){
        const topPos = activeNavText.offsetTop;
        // document.getElementById('resume-nav-container').scrollTop = topPos-20;
    }

}

///////////// Showing What Part of Page User is On
const aboutMe = document.querySelector('#about-me')
const aboutMeLink = document.querySelector('#link-about')

const experience = document.querySelector('#experience')
const experienceLink = document.querySelector('#link-experience')

const skills = document.querySelector('#skills')
const skillsLink = document.querySelector('#link-skills')

const education = document.querySelector('#education')
const educationLink = document.querySelector('#link-education')

const contact = document.querySelector('#contact')
const contactLink = document.querySelector('#link-contact')

const locationArray = [aboutMeLink, experienceLink, skillsLink, educationLink, contactLink]

// function that shows if element is in the window
let currentLocation
const highlightLocation = (link, classToHighlight) => {
    const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            console.log('intersection')
            // if new current location isn't the same as the last one
            if(link !== currentLocation){
                // if another location is highlighted, unhighlight it 
                for (loc of locationArray){
                    if(loc.classList.contains("highlight")){
                        loc.classList.remove("highlight")
                    }
                }
            }
            // set the current location
            currentLocation = link
            classToHighlight.classList.add("highlight")
            // classToHighlight.classList.toggle("highlight")
            scrollNav('.highlight')
            return
        }
        classToHighlight.classList.remove("highlight")
    }, {
    root: document.querySelector("#resume-main-container"), // the "viewport"
    threshold: [0.2, 0.9], // set offset  - however much % is visible in viewport
    })

    observer.observe(link);
}

highlightLocation(aboutMe, aboutMeLink)
highlightLocation(experience, experienceLink)
highlightLocation(skills, skillsLink)
highlightLocation(education, educationLink)
highlightLocation(contact, contactLink)


////////////Resume Experience Vertical Tabs
function openCity(evt, cityName) {
    const tabcontent = document.getElementsByClassName("vertical-tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("vertical-tab-links");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active-tab") ;
  }
  
///// animate things on window close, redirect
const resumeClose = () => {
    // animate some elements to be pushed up after button click
    const toAnimate = document.getElementsByClassName("animate")
    console.log (toAnimate)
    for(let i = 0; i < toAnimate.length; i++){
        toAnimate[i].classList.add('animate-up'); 
    }
    // make some fade out (using opacity)
    const toFadeOut = document.getElementsByClassName("to-fade-out")
    console.log (toFadeOut)
    for(let i = 0; i < toFadeOut.length; i++){
        toFadeOut[i].classList.add('fade-out'); 
    }

    // re-direct user after a delay
    setTimeout(() => {  
        document.getElementById("black-out").style.display = "block"
        window.location.href = "/"
    }, 1200);
}

////////////Toggle Menu on mobile
const toggleMenu = () => {
    document.getElementById("resume-nav").classList.toggle("show-nav")
    document.getElementById("resume-nav-container").classList.toggle("show-nav")
    document.getElementById("hamburger-menu").classList.toggle("show-nav")
    document.getElementById("resume-main-container").classList.toggle("show-nav")
}

////////////Lights Toggle
let lightToggle = "on"
const toggleLights = () => {
    // toggle light switch
    if(lightToggle === "on"){
        lightToggle = "off"
    } else {
        lightToggle = "on"
    }

    // toggle js that handles lights
    // turn it off regardless (to clear any existing ones)
    window.clearInterval(callWindowLights);
    window.clearInterval(callCharacter);
    // if toggle to "on", turn functions on
    if(lightToggle === "on"){
        callWindowLights = window.setInterval(() => {
            toggleWindow()
          }, 1500);
        
        callCharacter = window.setInterval(() => {
            toggleCharacter()
          }, 1500);
    } 
    
    // turn off existing window lights
    const getWindow = document.getElementsByClassName("window-on")
    while(getWindow.length){
        getWindow[0].classList.remove("window-on")        
    }

    // toggle nav bar light
    const getNavBar = document.getElementById("resume-nav-container")
    if(lightToggle === "off"){
        getNavBar.classList.remove("nav-border")
    } else {
        if(!getNavBar.classList.contains("nav-border")){
            getNavBar.classList.add("nav-border")
        }
    }

    // toggle button icon
    const lightButton = document.getElementById("lights-control-icon")
    if(lightToggle === "off"){
        lightButton.classList.remove("material-icons")
        lightButton.classList.add("material-icons-outlined")
    } else {
        lightButton.classList.add("material-icons")
        lightButton.classList.remove("material-icons-outlined")
    }
}

/////////// Move to href
const moveToHref = (theHref) => {
    // close the menu
    const theMenu = document.getElementsByClassName('show-nav')
    if(theMenu.length){
        while(theMenu.length){
            theMenu[0].classList.remove('show-nav')
        }
    }
    // scroll to view
    document.getElementById(theHref).scrollIntoView();
}
