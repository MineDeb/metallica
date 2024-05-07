let scrollCont = document.querySelector('.gallery');
let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

// scrollCont.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     scrollCont.scrollLeft += e.deltaY;
//     scrollCont.style.scrollBehavior = "auto";
// })

nextBtn.addEventListener("click", (e) => {
    scrollCont.style.scrollBehavior = "smooth";
    scrollCont.scrollLeft += 347;
})
prevBtn.addEventListener("click", (e) => {
    scrollCont.style.scrollBehavior = "smooth";
    scrollCont.scrollLeft -= 347;
})