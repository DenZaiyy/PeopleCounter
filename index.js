// document.getElementById('count-el').innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch;
// console.log(count)

// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -= 75
// console.log(bonusPoints)
// bonusPoints += 45
// console.log(bonusPoints)

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}