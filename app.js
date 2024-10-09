const form = document.querySelector(".form")
const input = document.querySelector(".input")
const coll = document.querySelector(".collection")

const DATA = JSON.parse(localStorage.getItem("data")) || []

function createList(data) {
    while (coll.firstChild) {
        coll.firstChild.remove()
    }
    data.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item.title
        coll.appendChild(li)
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
