function toggleMode() {
    document.documentElement.classList.toggle("light")

    if (document.documentElement.classList.contains("light")) {
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
    }
}

const theme = localStorage.getItem("theme")

if (theme === "dark") {
    document.documentElement.classList.remove("light")
}
