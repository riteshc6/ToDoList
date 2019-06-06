// Collecting text Input
let text = document.getElementById("task")
let todo = ""
let obj = {}
var count = 0
text.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {

        // Create elements to be added to html
        let next = e.target.nextElementSibling

        const li = document.createElement("li")
        li.setAttribute("id", count++)
        li.setAttribute("draggable", "true")
        li.setAttribute("ondragstart", "dragstart_handler(event)")
        li.setAttribute("ondrop", "drop_handler(event)")
        li.setAttribute("ondragover", "dragover_handler(event)")
        
        // li.className = "list"
        const input = document.createElement("input")
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', 'toggle')

        // li.appendChild(input)

        const label = document.createElement("label")


        label.textContent = e.target.value

        let div = document.createElement("div")
        div.appendChild(input)
        div.appendChild(label)
        li.appendChild(div)
        let cross = document.createElement("div")

        cross.textContent = "\u274C"
        cross.style.fontSize = "8px"
        cross.className = "cross"
        li.append(cross)
        li.style.display = "flex"
        li.style.alignItems = "center"
        li.style.justifyContent = "space-between"
        li.querySelector(".cross").style.visibility = "hidden"
        next.appendChild(li)
        
        e.target.value = ""
    }
})

// Complete tasks

document.addEventListener("click", (e) => {

    if (e.target.id == "toggle") {
        console.log(e.target.checked)
        if (e.target.checked) {
            let parent = e.target.parentNode
            let label = parent.querySelector("label")
            label.style.textDecoration = "line-through"
            label.style.color = "gray"

        } else {
            let parent = e.target.parentNode
            let label = parent.querySelector("label")
            label.style.textDecoration = "none"
            label.style.color = "black"

        }
    }

})

// ----------------------------------------List Categories--------------------------------------------------------

// -----------------ALL-------------------------------
let all = document.querySelector("#all")
all.addEventListener("click", (click) => {
    
    let li = document.querySelectorAll("#toggle")
    li.forEach(element => {
        console.log(element.checked)
        if (element.checked == true){
            element.parentNode.style.visibility = "visible"
            element.parentNode.parentNode.style.height = "inherit"
        }
        else{
            element.parentNode.style.visibility = "visible"
            element.parentNode.parentNode.style.height = "inherit"
        }
    });
})


// ----------------------ACTIVE----------------------------
let active = document.querySelector("#active")
active.addEventListener("click", (active) => {
    
    let li = document.querySelectorAll("#toggle")
    li.forEach(element => {
        console.log(element.checked)
        if (element.checked == true){
            element.parentNode.style.visibility = "hidden"
            element.parentNode.parentNode.style.height = "0"
        }
    });
})

// -----------------------COMPLETED---------------------------
let completed = document.querySelector("#completed")
completed.addEventListener("click", () => {
    
    let li = document.querySelectorAll("#toggle")
    li.forEach(element => {
        console.log(element.checked)
        if (element.checked == true){
            element.parentNode.style.visibility = "visible"
            element.parentNode.parentNode.style.height = "inherit"
        }
        else{
            element.parentNode.style.visibility = "hidden"
            element.parentNode.parentNode.style.height = "0"
        }

    });
})





// Show delete task option upon hover and perform delete upon click on cross

let ul = document.querySelector("ul")


ul.addEventListener("mouseenter", (e) => {
    let li = ul.querySelectorAll("li")
    for (let l of li) {
        // console.log(l)
        l.addEventListener("mouseenter", (event1) => {
            event1.target.querySelector(".cross").style.visibility = "visible"
            event.target.querySelector(".cross").addEventListener("click", (event3) => {
                let node = event3.target.parentNode;
                node.remove();
                event.stopImmediatePropagation();
            })
        })
        l.addEventListener("mouseleave", (event2) => {
            event2.target.querySelector(".cross").style.visibility = "hidden"
        })        
        
    }
    

})



// ---------------------------------------- DRAG & DROP ------------------------------------------------
function dragstart_handler(ev) {
    // console.log(ev.target)
    // console.log("first",ev.target.tagName)
    if (ev.target.tagName === "LI") {
        ev.dataTransfer.setData("text/plain", ev.target.id);
        ev.dataTransfer.setData("top-start", ev.target.offsetTop);
    }
    else {
        ev.dataTransfer.setData("text/plain", ev.target.parentNode.id);
    }
    
    
    // ev.dataTransfer.setdata("text/html", "<p>Example paragraph</p>")
    //  ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org")
}

function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
    ev.preventDefault();
    // console.log(ev.target)
    let parent = ev.target
    let topEnd = ev.target.offsetTop
    let topStart = ev.dataTransfer.getData("top-start")
    let relative = topStart - topEnd

    
    if (parent.tagName !== "LI"){
        parent = ev.target.parentNode.parentNode
    }
    console.log(parent)
    var data = ev.dataTransfer.getData("text/plain");
    
    if (relative > 0){
        // if (parent.parentNode.lastChild == ev.target){
        //     parent.parentNode.appendChild(document.getElementById(data))
    
        // }
        // else{
            parent.parentNode.insertBefore(document.getElementById(data), parent)
    
        // }

    } 
    else {
        if (parent.parentNode.lastChild == ev.target){
            parent.parentNode.appendChild(document.getElementById(data))
    
        }
        else{
            parent.parentNode.insertBefore(document.getElementById(data), parent.nextSibling)
    
        }
    }
    
}


