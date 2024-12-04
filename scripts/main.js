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

// thank you w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar_click
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("navDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.dropButton')) {
    var navDropdown = document.getElementById("navDropdown");
        if (navDropdown.classList.contains('show')) {
            navDropdown.classList.remove('show');
        }
    }
}

//thanks stackoverflow comment https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
// I now can enjoy doing less work and editing less files :D
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var el = document.createElement("a");
el.innerHTML = "EaglercraftX WASM &lpar;1.8, EXPERIMENTAL!!&rpar;";
el.href = "/playXWASM/index.html"
var div = document.getElementById("navDropdown");
insertAfter(div.lastChild, el);