const form = document.querySelector(".form")
const input = document.querySelector(".input")
const coll = document.querySelector(".collection")

const DATA = JSON.parse(localStorage.getItem("data")) || []

function createList(data) {
    while (coll.firstChild) {
        coll.firstChild.remove()
    }
    data.forEach(item => {

        let div = document.createElement("div")
        let btnDiv = document.createElement("div")
        let btn1 = document.createElement("button")
        let btn2 = document.createElement("button")
        let btn3 = document.createElement("button")
        div.innerHTML = item.title

        btn1.innerHTML = `<i class="bi bi-pencil-square"></i> Edit`
        btn2.innerHTML = `<i class="bi bi-clock"></i> Date`
        btn3.innerHTML = `<i class="bi bi-trash3"></i> Delete`

        div.className = "list"
        btnDiv.className = "btn_div"
        btn1.className = "btn_one"
        btn2.className = "btn_two"
        btn3.className = "btn_three"

        coll.appendChild(div)
        div.appendChild(btnDiv)
        btnDiv.appendChild(btn1)
        btnDiv.appendChild(btn2)
        btnDiv.appendChild(btn3)
    })
}
createList(DATA)

form.addEventListener("submit", e => {
    e.preventDefault()
    const value = input.value
    let newTodo = {
        id: new Date().getTime(),
        title: value
    }
    DATA.push(newTodo)
    localStorage.setItem("data", JSON.stringify(DATA))
    input.value = ""

    createList(DATA)

})
