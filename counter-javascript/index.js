console.log("I am kent regiel")
let count = 0

document.getElementById('counter').innerHTML = count


const increment = () => {
    count++
    document.getElementById('counter').innerHTML = count
}

const decrement = () => {
    count--
    document.getElementById('counter').innerHTML = count
}

const reset = () => {
    count = 0
    document.getElementById("counter").innerHTML = count
}