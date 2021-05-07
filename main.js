const tl = gsap.timeline({defaults:{ease:"power1.out"}});

// tl.fromTo(".welcome_overlay svg", {y: "-100%"}, {y: 0, stagger: 0.4, duration: 0.75})
tl.fromTo(".welcome_overlay svg", {y: 0}, {y: "-100%", stagger: 0.4, duration: 0.75, delay: 1.5});
tl.fromTo(".welcome_overlay", {transform: "scale(1)"}, {transform: "scale(10)", opacity: 0, display: "none", stagger: 0.4, duration: 0.75, delay: 1});


////////////////////////////////
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

(() => {
    for(let i = 0; i < 75; i++) {
        const dot = document.createElement('div');
    
        dot.style.top = Math.floor(Math.random() * about.clientHeight)+'px';
        dot.style.bottom = Math.floor(Math.random() * about.clientHeight)+'px';
        dot.style.left = Math.floor(Math.random() * about.clientWidth)+'px';
        dot.style.right = Math.floor(Math.random() * about.clientWidth)+'px';
    
        const size = Math.floor(Math.random() * 10);
        dot.style.width = size + 'px';
        dot.style.height = size +'px';
    
        dot.style.animationDuration = 5+size+'s';
        dot.style.animationDelay = -size+'s';
    
        dot.classList.add('dot');
    
        about.appendChild(dot);
    }

    for(let i = 0; i < 75; i++) {
        const dot = document.createElement('div');
    
        dot.style.top = Math.floor(Math.random() * contact.clientHeight)+'px';
        dot.style.bottom = Math.floor(Math.random() * contact.clientHeight)+'px';
        dot.style.left = Math.floor(Math.random() * contact.clientWidth)+'px';
        dot.style.right = Math.floor(Math.random() * contact.clientWidth)+'px';
    
        const size = Math.floor(Math.random() * 10);
        dot.style.width = size + 'px';
        dot.style.height = size +'px';
    
        dot.style.animationDuration = 5+size+'s';
        dot.style.animationDelay = -size+'s';
    
        dot.classList.add('dot');
    
        contact.appendChild(dot);
    }
})();