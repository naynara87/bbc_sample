gsap.registerPlugin(ScrollTrigger);


function slideAnimation() {
    let tl = gsap.timeline({
        // delay: 0.1
    });
    tl.from('.bbc_sec01 .slide-title', {
            y: -40,
            opacity: 0,
            duration: 2,
            ease: 'power4'
        })
        .from('.bbc_sec01 .slide-text', {
            y: -40,
            opacity: 0,
            duration: 1.6,
            ease: 'power4'
        }, .5)
        .from('.sec01-1-1', {
            // x: -50,
            y: 50,
            opacity: 0,
            ease: 'power2',
            duration: 3
        }, 1)
        .from('.sec01-1-2', {
            x: 150,
            // y: -50,
            opacity: 0,
            ease: 'power2',
            duration: 3
        }, 1);
}

function init() {

    gsap.from('.bbc_sec02', {
        opacity: 0,
        yPercent: 10,
        scrollTrigger: {
            trigger: '.bbc_sec02',
            start: 'top bottom-=40%',
            end: 'top center',
            toggleClass: 'active',
            toggleActions: 'play none none reverse',
            // markers: true
        }
    });
    gsap.from('.bbc_sec03', {
        opacity: 0,
        yPercent: 10,
        scrollTrigger: {
            trigger: '.bbc_sec03',
            start: 'top bottom-=40%',
            end: 'top center',
            toggleClass: 'active',
            toggleActions: 'play none none reverse',
            // markers: true
        }
    });
    gsap.from('.bbc_sec04', {
        opacity: 0,
        yPercent: 10,
        scrollTrigger: {
            trigger: '.bbc_sec04',
            start: 'top bottom-=20%',
            end: 'top center',
            toggleClass: 'active',
            toggleActions: 'play none none reverse',
            // markers: true
        }
    });
    // gsap.from('.bbc_sec05 h1', {
    //     opacity: 0,
    //     yPercent: 10,
    //     scrollTrigger: {
    //         trigger: '.bbc_sec05',
    //         start: 'top top-=20%',
    //         toggleClass: 'active',
    //         toggleActions: 'play none none reverse',
    //         markers: true
    //     }
    // })
}

window.addEventListener('load', function () {
    // slideAnimation();
    init();
});