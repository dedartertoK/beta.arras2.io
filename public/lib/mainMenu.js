const modalsWrapper = document.getElementById("modalsWrapper")
  , modals = {
    tos: ["tosModalButton", "tos"],
    pp: ["ppModalButton", "pp"],
    changelogHistory: ["changelogModalButton", "changelogHistory"],
    about: ["aboutModalButton", "about"],
    settings: ["settingsModalButton", "settings"],
    controls: ["controlsModalButton", "controls"]
};
for (let e in modals)
    modals[e][0] = document.getElementById(modals[e][0]),
    modals[e][1] = document.getElementById(modals[e][1]);
Object.values(modals).forEach( ([e,t]) => {
    e.addEventListener("click", () => {
        openModal(t)
    }
    ),
    t.querySelector(".close").addEventListener("click", () => {
        closeModal(t)
    }
    )
}
);
const modalsScaleWrapper = document.getElementById("modalsScaleWrapper")
  , changelog = document.getElementById("changelog")
  , startMenuBtnsContainer = document.getElementById("startMenuBtnsContainer")
  , logo = document.getElementById("logo")
  , footer = document.getElementById("footer")
  , horizontalAd = document.querySelector(".adContainer[main-horizontal]");
function resize() {
    var e = gcd();
    let t = 1
      , n = 1;
    var {w: o, h: r} = {
        w: 16,
        h: 9
    };
    n = e * window.innerWidth / (e * window.innerHeight) > o / r ? (t = vh(27) / 200,
    vh(27) / 200) : (t = r * vw(27) / o / 135,
    r * vw(27) / o / 200),
    modalsScaleWrapper.style.transform = `scale(${t})`,
    changelog.style.transform = `scale(${t})`,
    startMenuBtnsContainer.style.transform = `scale(${t})`,
    logo.style.transform = `scale(${t})`,
    footer.style.transform = `scale(${t})`,
    footer.style.marginBottom = horizontalAd.offsetHeight * (t / 2) + "px";
    [{
        selector: ".adContainer[main-horizontal]",
        initialScale: .8
    }, {
        selector: ".adContainer[secondary-vertical]",
        initialScale: .8
    }, {
        selector: ".adContainer[death-screen]",
        translate: "0%",
        initialScale: .9
    }].forEach(e => {
        var t = document.querySelector(e.selector)
          , o = e.translate ? `translate(${e.translate})` : "";
        t.style.transform = `scale(${n * (e.initialScale || 1)}) ` + o
    }
    )
}
function vh(e) {
    return e * Math.max(document.documentElement.clientHeight, window.innerHeight) / 100
}
function vw(e) {
    return e * Math.max(document.documentElement.clientWidth, window.innerWidth) / 100
}
function gcd(e=window.innerWidth, t=window.innerHeight) {
    return 0 == t ? e : gcd(t, e % t)
}
window.addEventListener("resize", resize),
resize();
let currentModal;
function openModal(e) {
    currentModal && closeModal(currentModal),
    modalsWrapper.style.display = "block",
    e.setAttribute("active", !0),
    currentModal = e
}
function closeModal(e) {
    modalsWrapper.style.display = "none",
    e.setAttribute("active", !1)
}
var clicked = !0
  , clicked = (document.querySelector("#settings").addEventListener("click", function() {
    document.querySelector(".modal-overlay").style.display = "flex"
}),
!1);
document.querySelector("#startMenuSlidingTrigger").addEventListener("click", function() {
    var e = document.querySelector("#startMenuSlidingTrigger")
      , t = document.querySelectorAll(".slider")[0];
    clicked ? (clicked = !1,
    e.innerHTML = '<h3 class="nopadding">close options/help 🡶</h3>',
    t.style.top = "-310px") : (clicked = !0,
    e.innerHTML = '<h3 class="nopadding">view options/help 🡲</h3>',
    t.style.top = 0)
}),
navigator.serviceWorker && navigator.serviceWorker.register("./service-worker.js", {
    scope: "/"
}).then(e => console.log("Service Worker Registered")),
window.showMain = () => {
    document.querySelector("#main").style.display = "flex",
    document.querySelector("#gamemodes").style.display = "none",
    document.querySelector("#regions").style.display = "none"
}
;
