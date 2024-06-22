let counter = 1
let intervalId = setInterval(autoSlide,5000)

function autoSlide() {
    document.getElementById('radio' + counter).checked = true
    counter++
    if(counter > 4) {
        counter = 1
    }
}

function manualSlide(radioId) {
    clearInterval(intervalId)
    counter = parseInt(radioId.replace("radio",""));
    document.getElementById(radioId).checked = true
    setTimeout(function() {
        intervalId = setInterval(autoSlide,5000)
    },2000)
}

document.getElementById('segment').addEventListener('click',function(){
    this.focus()
})