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




function val_form() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var city = document.myform.city.value;
    var province = document.myform.province.value;
    var date = document.myform.date.value;
    var network = document.myform.network.value;
    var add = document.myform.add.value;
    var issue = document.myform.issue.value;

    if (fname == "") {
        document.getElementById("msgerror1").innerHTML = "This field is required";

    }
    if (lname == "") {
        document.getElementById("msgerror2").innerHTML = "This field is required";

    }
    if (city == "") {
        document.getElementById("msgerror3").innerHTML = "This field is required";

    }
    if (province == "") {
        document.getElementById("msgerror4").innerHTML = "This field is required";

    }
    if (date == "") {
        document.getElementById("msgerror5").innerHTML = "This field is required";

    }
    if (network == "") {
        document.getElementById("msgerror6").innerHTML = "This field is required";

    }
    if (add == "") {
        document.getElementById("msgerror7").innerHTML = "This field is required";

    }
    if (issue == "") {
        document.getElementById("msgerror8").innerHTML = "This field is required";
        return false;
    }

}