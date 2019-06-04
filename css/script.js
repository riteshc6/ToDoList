// Collecting text Input
let text = document.getElementById("task")
let todo = ""
text.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {

        // Create elements to be added to html
        let next = e.target.nextElementSibling
        console.log(next)
        const li = document.createElement("li")
        const label = document.createElement("label")
        label.textContent = e.target.value
        
        li.appendChild(label)
        next.appendChild(li)
        e.target.value = ""
    }
})

