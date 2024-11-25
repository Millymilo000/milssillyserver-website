$.getJSON('/scripts/data.json', function(data) {
    var els = document.querySelectorAll('#map');
    for (var i=0; i < els.length; i++) {
        els[i].setAttribute("href", data.map);
    }
    var els = document.querySelectorAll('#eaglerIP');
    for (var i=0; i < els.length; i++) {
        els[i].innerHTML = data.eaglerIP;
    }
    var els = document.querySelectorAll('#javaIP');
    for (var i=0; i < els.length; i++) {
        els[i].innerHTML = data.javaIP;
    }
    var els = document.querySelectorAll('#form');
    for (var i=0; i < els.length; i++) {
        els[i].setAttribute("href", data.form);
    }
    var els = document.querySelectorAll('#discord');
    for (var i=0; i < els.length; i++) {
        els[i].setAttribute("href", data.discord);
    }
    var els = document.querySelectorAll('#formInner');
    for (var i=0; i < els.length; i++) {
        els[i].innerHTML=data.form;
        els[i].setAttribute("href", data.form);
    }
    var els = document.querySelectorAll('#discordInner');
    for (var i=0; i < els.length; i++) {
        els[i].innerHTML = data.discord;
        els[i].setAttribute("href", data.discord);
    }
});

const toggleTheme = document.getElementById("styleToggle");

const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);
toggleTheme.onclick = function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

var els = document.querySelectorAll('.external');
        for (var i=0; i < els.length; i++) {
            els[i].setAttribute("target", "_blank");
        }

// since this javascript file is just in everysingle page, i might change its name to something like "global.js" to add some extra things