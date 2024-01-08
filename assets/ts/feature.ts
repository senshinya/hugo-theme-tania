import ThemeColorScheme from "ts/colorScheme"
import { renderCopyButton } from "ts/copyButton"

const init = () => {
    new ThemeColorScheme(document.getElementById('dark-mode-button'))
    renderCopyButton()
}

window.addEventListener('load', () => {
    setTimeout(function () {
        init()
    }, 0)
})