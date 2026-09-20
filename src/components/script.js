var dm = false;
const bgColor = ["#F1F1FF", "#000074"];
const textColor = ["#0000ff", "#F1F1FF"]
const dm_imgs = ["moon.svg", "sun.svg"];
const root = document.documentElement;
const buttons = document.querySelector('.button');
const textbox = document.querySelector('#textbox');
 
function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    }
    return null
}

window.move_page = function(a, b) {
  window.open(a, '_' + b)
}

window.onload = function(){
  let dm_c = getCookie('dm');
  dm = dm_c === "true";
  dmToggle();
}

window.dmClick = function(){
  dm = !dm;
  document.cookie = "dm="+dm+"";
  dmToggle();
}

window.dmToggle = function() { 
  document.getElementById("dm_icon").src = dm_imgs[+dm];
  document.body.style.backgroundColor = bgColor[+dm];
  root.style.setProperty('--main-color', textColor[+dm]);
  buttons.style.setProperty("background-color", dm ? "#000074" : "#FFFFFF");
  textbox.style.setProperty("background-color", dm ? "#000074" : "#FFFFFF");
} 