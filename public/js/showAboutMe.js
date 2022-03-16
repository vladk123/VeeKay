// Toggle showing more/less in the About Me section

const showAboutMe = () => {
    const hidden = document.getElementById('hidden-about-me')
    const hideBtn = document.getElementById('hide-about-me-toggle')
    if(hidden && hideBtn){
        if(hidden.classList.contains('hidden')){
            hidden.classList.remove('hidden')
            hideBtn.innerText = 'Show Less'
        } else {
            hidden.classList.add('hidden')
            hideBtn.innerText = 'Show More'
        }
        
    }
}