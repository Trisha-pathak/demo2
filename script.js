function hide() {
    var checkbox = document.getElementById("phone");
    var hiddeninputs = document.getElementsByClassName("hide-phone")

    for (var i = 0; i != hiddeninputs.length; i++) {
        if (checkbox.checked) {
            hiddeninputs[i].style.display = "inline";
        }
        else {
            hiddeninputs[i].style.display = "none";
        }
    }
}
function hide_email() {
    var checkbox = document.getElementById("chk-email");
    var hiddeninputs = document.getElementsByClassName("hide-mail");

    for (var i = 0; i != hiddeninputs.length; i++) {
        if (checkbox.checked) {
            hiddeninputs[i].style.display = "inline";
        }
        else {
            hiddeninputs[i].style.display = "none";
        }
    }
}
function hide_phone() {
    var checkbox = document.getElementById("chk-phone");
    var hiddeninputs = document.getElementsByClassName("hide-phn")

    for (var i = 0; i != hiddeninputs.length; i++) {
        if (checkbox.checked) {
            hiddeninputs[i].style.display = "inline";
        }
        else {
            hiddeninputs[i].style.display = "none";
        }
    }
}


const form = document.getElementById('form')
const lname = document.getElementById('lname')
const city = document.getElementById('city')
const province = document.getElementById('province')
const date = document.getElementById('date')
const network = document.getElementById('network')
const add = document.getElementById('add')
const issue = document.getElementById('issue')

form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null) {
        messages.push('This field is required')
    }
    if (lname.value === '' || lname.value == null) {
        messages.push('This field is required')
    }
    if (city.value === '' || city.value == null) {
        messages.push('This field is required')
    }
    if (province.value === '' || province.value == null) {
        messages.push('This field is required')
    }
    if (date.value === '' || date.value == null) {
        messages.push('This field is required')
    }
    if (network.value === '' || network.value == null) {
        messages.push('This field is required')
    }
    if (add.value === '' || add.value == null) {
        messages.push('This field is required')
    }
    if (issue.value === '' || issue.value == null) {
        messages.push('This field is required')
    }
})