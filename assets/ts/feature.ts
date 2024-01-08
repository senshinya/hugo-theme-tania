import ThemeColorScheme from "ts/colorScheme"

const init = () => {
    new ThemeColorScheme(document.getElementById('dark-mode-button'))
}

window.addEventListener('load', () => {
    setTimeout(function () {
        init()
    }, 0)
})