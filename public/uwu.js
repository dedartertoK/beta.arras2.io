const startMenuWrapper = document.getElementById("startMenuWrapper");
const changelog = document.getElementById("Changeloge"); // Get the Changelog element
const scaleAdjustment = 1.1; // Adjust this value to make elements bigger (e.g., 1.1 for 10% larger)
const settingsMenu = document.getElementById("settingsMenu"); // Get the settings button element
const homeButton = document.getElementById('homeButton'); // Home button
const totalPlayerCount = document.getElementById("totalPlayerCount");
const bruhliterally = document.getElementById("bruhliterally");

function resize() {
    const scaleFactor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080) * scaleAdjustment; // Adjust based on your design resolution

    // Center and scale elements except bruhliterally and totalPlayerCount
    startMenuWrapper.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    settingsMenu.style.transform = `scale(${scaleFactor})`;
    settingsMenu.style.transformOrigin = "top right";
    changelog.style.transform = `scale(${scaleFactor})`;
    changelog.style.transformOrigin = "top left";
     // Fix homeButton position
     homeButton.style.top = '-250px';  // Use fixed pixel values for a consistent position
     homeButton.style.right = '290px';  // Use fixed pixel values for a consistent position
    // Keep bruhliterally and totalPlayerCount centered but do not scale their size
    bruhliterally.style.transform = `translate(-50%, -50%)`;  // Remove scaling here
    totalPlayerCount.style.transform = `translate(-50%, -50%)`;  // Remove scaling here
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
