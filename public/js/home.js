const homeAnimateUp = () => {
    // document.getElementById("music-div").classList.add('animate-up'); 
    
    // animate some elements to be pushed up after button click
    const toAnimate = document.getElementsByClassName("animate")
    
    for(let i = 0; i < toAnimate.length; i++){
        toAnimate[i].classList.add('animate-up'); 
        console.log (toAnimate[i])
    }
    // make some fade out (using opacity)
    const toFadeOut = document.getElementsByClassName("to-fade-out")
    console.log (toFadeOut)
    for(let i = 0; i < toFadeOut.length; i++){
        toFadeOut[i].classList.add('fade-out'); 
    }

    // re-direct user after a delay
    setTimeout(() => {  
        window.location.href = "/resume"
    }, 1200);

}
