const board = document.querySelector(".board")
const box = document.getElementsByClassName("box")
const reset = document.querySelector(".reset")
const playerOne = document.querySelector(".playerOne")
const playerTwo = document.querySelector(".playerTwo")

let turn = true
let click = 0
let OnePoints = 0
let TwoPoints = 0
colorTurn()

for (let i = 0; i < 9; i++) {
    board.innerHTML += `<input type='button' onclick='mark(this)' class='box' value='${i}'>`
}


function mark(button) {

    if (button.value === 'X' || button.value === 'O') return
    if (reset.style.display === "block") return

    if (turn) {
        button.value = 'X'
    } else {
        button.value = 'O'
    }

    colorTurn()
    turn = !turn
    button.style.color = "#eee"
    click++

    if (click === 9) {
        reset.style.display = 'block'
    }

    verification(0, 1, 2)
    verification(3, 4, 5)
    verification(6, 7, 8)
    verification(0, 3, 6)
    verification(1, 4, 7)
    verification(2, 5, 8)
    verification(0, 4, 8)
    verification(2, 4, 6)


}

reset.addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        box[i].value = i
        box[i].style.color = "#444"
        click = 0
        reset.style.display = "none"
    }
})

function verification(a, b, c) {
    if (box[a].value == box[b].value && box[b].value == box[c].value) {
        box[a].style.color = '#393'
        box[b].style.color = '#393'
        box[c].style.color = '#393'
        reset.style.display = "block"
        if (turn == true) {
            result(0, 1)
        } else {
            result(1, 0)
        }
    }
}

function colorTurn() {

    playerOne.classList.toggle("active")
    playerTwo.classList.toggle("active")

}


function result(POP, PTP) {
    playerOne.innerHTML = `Jogador X : <span>${OnePoints += POP}</span>`
    playerTwo.innerHTML = `Jogador O : <span>${TwoPoints += PTP}</span>`
}

result(0, 0)