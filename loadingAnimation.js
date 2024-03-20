function loadingAnimation() {
    gsap.from('.main-heading', {
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 0.7,
        stagger: 0.2
    });
    gsap.from('.sub-heading', {
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 0.7,
        stagger: 0.08
    });
    gsap.from('#logo', {
        y: -30,
        opacity: 0,
        delay: 0.2,
        duration: 0.7
    });
    gsap.from('#nav-links .single-nav', {
        y: -30,
        opacity: 0,
        delay: 0.2,
        duration: 0.7,
        stagger: 0.1
    });
    gsap.from('#nav-icons a', {
        y: -30,
        opacity: 0,
        delay: 0.2,
        duration: 0.7,
        stagger: 0.1
    });
    // gsap.from('.cards', {
    //     y: 30,
    //     opacity: 0,
    //     delay: 0.2,
    //     duration: 0.7,
    //     stagger: 0.2
    // })
}