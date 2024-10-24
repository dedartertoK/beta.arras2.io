const scaleAdjustment = 1.1;
const blackScreen = document.getElementById("black-screen1");
const changelog = document.getElementById("discord-btn"); // Get the Changelog element
const p = document.getElementById('container'); // element to maintain same size
const changelog1 = document.getElementById("modal-content"); // Get the Changelog element
const about = document.getElementById("modal-content1"); // Get the Changelog element
const closere = document.getElementById('close-btn'); // Close buttons
const close1 = document.getElementById('close-btn1'); // Close buttons
const homeButton = document.getElementById('homeButton'); // Home button
function resize() {
    const scaleFactor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080) * scaleAdjustment;

    // Center and scale blackScreen1
    blackScreen.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`; 
    blackScreen.style.position = 'absolute';
    blackScreen.style.left = '50%';
    blackScreen.style.top = '43%';
    
    // Scale the Changelog
   // changelog.style.transform = `scale(${scaleFactor})`; 
   // changelog.style.transformOrigin = "bottom left"; 
   changelog1.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`; 
   changelog1.style.position = 'absolute';
   changelog1.style.left = '50%';
   changelog1.style.top = '43%';

    about.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`; 
    about.style.position = 'absolute';
    about.style.left = '50%';
    about.style.top = '43%';
    /*closere.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    closere.style.position = 'absolute';
    closere.style.left = '50%';
    closere.style.top = '43%';
    close1.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    close1.style.position = 'absolute';
    close1.style.left = '50%';
    close1.style.top = '43%';*/
        // Center and scale blackScreen1
        p.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`; 
      p.style.position = 'absolute';
     p.style.left = '50%';
      p.style.top = '20%';
   

}

function vh(e) {
    return e * Math.max(document.documentElement.clientHeight, window.innerHeight) / 100;
}

function vw(e) {
    return e * Math.max(document.documentElement.clientWidth, window.innerWidth) / 100;
}

function gcd(e = window.innerWidth, t = window.innerHeight) {
    return t === 0 ? e : gcd(t, e % t);
}

window.addEventListener("resize", resize);
resize();

if (navigator.serviceWorker) {
    navigator.serviceWorker.register("./service-worker.js", {
        scope: "/"
    }).then(e => console.log("Service Worker Registered"));
}

window.showMain = () => {
    // Removed visibility logic for #main, #gamemodes, and #regions
};
