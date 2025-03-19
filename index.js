let countEl = document.getElementById("count-el")
let count = 0
function increment () {
    count = count + 1
    countEl.innerText = count
}

function decrement() {
    count = count - 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

function reset() {
    save()
    count = 0
    countEl.innerText = count
}
