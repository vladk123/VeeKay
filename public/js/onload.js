
window.onload = () => {
    // Show success message after message submitted
    let urlParams = new URLSearchParams(window.location.search); //get all parameters
    let urlSubmitted = urlParams.get('submitted');

    if(urlSubmitted){
        // scroll to them correct id (hopefully finishes loading by this point) - delay because otherwise it thinks the id location is elsewhere, based on the height of the first tab
        const scrollTo = document.querySelector(`#form-submitted`)
        scrollTo.style.display = "block";
        scrollTo.scrollIntoView()
        // remove from param
        setTimeout(() => {
            window.history.replaceState(null, null, window.location.pathname);
        }, 1500);
    }


    // scrolling through images under Projects to change them
    const imgCarousel = document.getElementsByClassName('img-carousel')

    if(imgCarousel.length){
        // find each carousel

        for(let imgDiv of imgCarousel){
            // find each image in that carousel
            const imgList = imgDiv.getElementsByClassName('img-link-img')

            if(imgList.length > 1){
                // every 4 secs, change
                window.setInterval(() => {
                    let breakLoop
                    for(let i = 0; i < imgList.length ; i++){
                        // if found the one being shown
                        
                        if(imgList[i].classList.contains('show')){
                            // make it fade out
                            imgList[i].classList.remove('fade-in')
                            imgList[i].classList.add('fade-out')
                            window.setTimeout(() => {
                                // get rid of "show" class
                                imgList[i].classList.remove('fade-out')
                                imgList[i].classList.remove('show')
                                
                                // if the next image exists, apply "show" and "fade-in"
                                if(typeof imgList[i + 1] !== "undefined"){
                                    imgList[i + 1].classList.add('show')
                                    imgList[i + 1].classList.add('fade-in')
                                    breakLoop = true
                                } else {
                                    imgList[0].classList.add('show')
                                    imgList[0].classList.add('fade-in')
                                    breakLoop = true
                                }
                            }, 1000)
                        }
                        if(breakLoop === true){
                            break
                        }
                    }
                }, 10000);
            }
        }

        
    }

}

const hideMsg = () => {
    const msgToClose = document.querySelector(`#form-submitted`)
    msgToClose.style.display = "none";
}