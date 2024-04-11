const navbar = document.getElementById("container")
const header = document.getElementById("header")

// default or previous scroll pos. Math.ceil() used for smoothing sensitivity 
let prevScrollPosition = Math.ceil(window.scrollY)
// min threshold for the scroll position value
const sensitivity = 60

function handleNavOnScroll() {
    // current scroll position
    const currentScrollPosition = Math.ceil(window.scrollY)
    // total scrolled distance
    const scrolled = Math.abs(prevScrollPosition - currentScrollPosition)
    
    // if scrolled distance is above sensitivity threshold
    if (scrolled >= sensitivity) {
        if (prevScrollPosition > currentScrollPosition) {
            navbar.style.top = 0
            navbar.style.transition = "top 0.8s"
            header.style.color = "white"
        } else {
            navbar.style.top = "-150px"
            navbar.style.transition = "top 0.8s"
            header.style.color = "black"
        }
        // set current scroll pos to previous scroll pos as new reference
        prevScrollPosition = currentScrollPosition
    }
}

// trigger function on scroll event
window.addEventListener("scroll", handleNavOnScroll)