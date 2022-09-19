const theme = window.localStorage.getItem("theme");
const toggle = document.getElementById("img-dark");

if (theme === "dark") {
    document.body.classList.add("dark");    
    
} else {
    document.body.classList.add("light"); 
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");    
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark");
    }
})

