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

const callWindowLights = window.setInterval(() => {
    toggleWindow()
  }, 1500);

const callCharacter = window.setInterval(() => {
    toggleCharacter()
  }, 1500);



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
const highlightLocation = (link, classToHighlight) => {
    const observer = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        // if another location is highlighted, unhighlight it 
        for (loc of locationArray){
            if(loc.classList.contains("highlight")){
                loc.classList.remove("highlight")
            }
        }
        classToHighlight.classList.add("highlight")
        return
    }
    classToHighlight.classList.remove("highlight")
    }, {
    root: document.querySelector("#resume-main-container"), // the "viewport"
    // threshold: [0], // set offset  - however much % is visible in viewport
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
  
// animate things on window close
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
        window.location.href = "/"
    }, 1200);
}