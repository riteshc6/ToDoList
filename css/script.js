// Collecting text Input
let text = document.getElementById("task")
let todo = ""
text.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {

        // Create elements to be added to html
        let next = e.target.nextElementSibling
        
        const li = document.createElement("li")
        const input = document.createElement("input")
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', 'toggle')
        li.appendChild(input)

        const label = document.createElement("label")


        label.textContent = e.target.value
        
        li.appendChild(label)
        next.appendChild(li)
        e.target.value = ""
    }
})

// Complete tasks


document.addEventListener("click", (e) => {
    
    if (e.target.id == "toggle"){
        console.log(e.target.checked)
        if (e.target.checked) {
            let parent = e.target.parentNode
            let label = parent.querySelector("label")
            label.style.textDecoration = "line-through"
            label.style.color = "gray"
            console.log(label)
        }
        else {
            let parent = e.target.parentNode
            let label = parent.querySelector("label")
            label.style.textDecoration = "none"
            label.style.color = "black"
            console.log(label)
        }
    }
    
})
