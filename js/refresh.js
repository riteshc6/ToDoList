// ------------------------------------------------Add list --------------------------------------------------------------------

var data = {}
var count = 0

function addTask(e) {
    obj = {}
    obj["text"] = e.target.value
    obj["completed"] = false;
    data[count] = obj
    count++
}


document.querySelector("#task").addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        addTask(e)
        e.target.value = ""
        domRefresh()
    }
})


// -------------------------------------------------------- DOM REFRESH ------------------------------------------------------------------

function domRefresh() {
    let ul = document.querySelector("ul")
    ul.innerHTML = ""

    let keys = Object.keys(data)

    for (let i = 0; i < keys.length; i++) {

        let li = document.createElement("li")
        li.setAttribute("id", keys[i])

        let label = document.createElement("label")
        label.textContent = data[keys[i]].text



        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = data[keys[i]].completed
        checkbox.value = data[keys[i]].completed
        checkbox.setAttribute("id", "toggle")

        // ---------------------------------------------- COMPLETE TASK -------------------------------------------------------------------
        checkbox.addEventListener("change", (e) => {
            if (e.target.id == "toggle") {
                let id = e.target.parentNode.parentNode.id
                if (e.target.checked) {
                    data[id].completed = true
                } else {
                    data[id].completed = false
                }
                domRefresh()

            }
            event.stopPropagation()
        })

        checkbox.addEventListener("keypress", (e2) => {
            if (e2.keycode == 13) {
                if (e2.target.id == "toggle") {
                    let id = e2.target.parentNode.parentNode.id
                    if (e2.target.checked) {
                        data[id].completed = true
                    } else {
                        data[id].completed = false
                    }
                    domRefresh()

                }

            }

            event.stopPropagation()
        })




        if (data[keys[i]].completed) {
            label.style.textDecoration = "line-through"
            label.style.color = "gray"
        } else {
            label.style.textDecoration = "none"
            label.style.color = "black"
        }

        let div = document.createElement("div")
        div.appendChild(checkbox)
        div.appendChild(label)
        li.appendChild(div)


        let cross = document.createElement("button")
        cross.textContent = "Delete"
        // cross.style.fontSize = "8px"
        cross.className = "cross"

        li.append(cross)
        li.style.display = "flex"
        li.style.alignItems = "center"
        li.style.justifyContent = "space-between"
        // li.querySelector(".cross").style.visibility = "hidden"

        document.querySelector("ul").appendChild(li)

        // ----------------------------------------------- DELETE TASK --------------------------------------
        cross.addEventListener("click", (event3) => {

            let node = event3.target.parentNode;
            let id = node.getAttribute("id")
            delete data[id]
            node.remove();
            event.stopImmediatePropagation();
            domRefresh()
        })

        cross.addEventListener("keypress", (event4) => {
            if (event4.keycode == 13) {
                let node = event4.target.parentNode;
                console.log("delete id : ", node.getAttribute("id"))
                let id = node.getAttribute("id")
                delete data[id]
                node.remove();
                event.stopImmediatePropagation();
                domRefresh()

            }

        })

    }



}