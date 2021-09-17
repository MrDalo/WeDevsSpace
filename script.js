
/*function for createing all stars*/
function creator(){
    for(let i = 0; i < 120; i++){
        
        let newStar = document.createElement('div');
        newStar.className="star";
        box.appendChild(newStar);
        
    }
}


/*function got crating stars coordinates*/
function constructor() {
    stars.forEach(star => {
        let randNumberWidth = Math.floor((Math.random() * 10000) % (window.innerWidth - 20));
        let randNumberHeight = Math.floor((Math.random() * 1000) % (window.innerHeight + 400));

        star.style.left = `${randNumberWidth}px`;
        star.style.top = `${randNumberHeight}px`;

    })

}

/* VARIABLES */ 


const nadpis = document.getElementById("nadpis");
let box = document.getElementById("stars");

creator();

const stars = document.querySelectorAll(".star");
constructor();


/*action on mouse move in web*/
box.addEventListener("mousemove", event => {
    let moveX = ((window.innerWidth)/2 - event.pageX) * 0.1;
    let moveY = ((window.innerHeight)/2 - event.pageY) * 0.1;

    box.style.marginLeft = moveX+'px';
    box.style.marginTop = moveY+'px';

})

/*action on scroll event in web*/
addEventListener("scroll", () => {
    let valueOfScroll = window.scrollY;
    stars.forEach(star => {
        star.style.transform = `translateY(${-valueOfScroll * 0.4}px)`;
    })

    nadpis.style.opacity = `${1 - (valueOfScroll / (window.innerHeight / 2))}`;


})