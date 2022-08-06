let slideIndex = 0;
initSlides();

// to initiate slide show
function initSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("--active");
    }
    if (slideIndex >= slides.length) { slideIndex = 0 }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("--active");
    dots[slideIndex].classList.add("active");
    slideIndex++;
    setTimeout(initSlides, 10000);
}

// to initiate menu
// function openCity(evt, cityName) {

//     var i, tabcontent, tablinks;

//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }


//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }


//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
// new menu code
initMenu();
function initMenu(){
    const tabLinks = document.querySelectorAll('.tab .tablinks');
    tabLinks.forEach(tabLink => {
        const onMenuEnter = ()=>{
            const menuId = tabLink.getAttribute('data-menuid');
            showTab(menuId);
        }
        const onMenuLeave = ()=>{
            const menuId = tabLink.getAttribute('data-menuid');
            hideTab(menuId);
        }
        tabLink.addEventListener('mouseenter',onMenuEnter);
        tabLink.addEventListener('mouseleave',onMenuLeave);
    });
    function showTab(menuId){
        document.getElementById(menuId).style.display = "block";
    }
    function hideTab(menuId){
        document.getElementById(menuId).style.display = "none";
    }
}