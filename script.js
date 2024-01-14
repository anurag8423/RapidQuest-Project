document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {

    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))
});
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if(window.innerWidth <= 480){
    if (scrollPosition + windowHeight >= documentHeight) {
        document.getElementById("sup").style.display = "none";
        document.getElementById("but").style.display = "none";
        document.getElementById("doc").style.display = "none";
        document.getElementById("navb").style.display = "none";
        document.getElementById("sup3").style.height="20em";
        document.getElementById("update").style.display = "block";
    } else {
        document.getElementById("sup").style.display = "flex";
        document.getElementById("but").style.display = "block";
        document.getElementById("doc").style.display = "block";
        document.getElementById("navb").style.display = "inline-block";
        document.getElementById("sup3").style.height="26em";
        document.getElementById("update").style.display = "none";
    }
}
});
