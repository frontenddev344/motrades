function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}


//  Header  JS Start  
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });
});
//  Header  JS End

// Counter JS Start
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
// Counter JS End

// AOS JS Start
AOS.init({
    duration: 1200,
});
// AOS JS End


document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".home_counter");

    const startCounter = (counter) => {

        const target = +counter.getAttribute("data-target");
        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const counter = entry.target;

                startCounter(counter);

                observer.unobserve(counter);
            }
        });

    }, {
        threshold:0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

});