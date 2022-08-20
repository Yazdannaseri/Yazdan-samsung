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
    setTimeout(initSlides, 8000);
}


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