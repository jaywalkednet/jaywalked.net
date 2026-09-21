let darkmode = localStorage.getItem('darkmode');
const dm = document.getElementById('dm');

const enableDarkMode = () => {
    document.documentElement.classList.add('darkmode');
    localStorage.setItem('darkmode', 'true');
}

const disableDarkMode = () => {
    document.documentElement.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

dm.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "true" ? enableDarkMode() : disableDarkMode();
})

