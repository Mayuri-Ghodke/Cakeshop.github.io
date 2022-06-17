function validateEmpty(arg) {
    console.log(arg.value);
    if(arg.value == "") {
        document.getElementById(arg.id).classList.remove("is-valid");
        document.getElementById(arg.id).classList.add("is-invalid");
        return false;
    } else {
        document.getElementById(arg.id).classList.remove("is-invalid");
        document.getElementById(arg.id).classList.add("is-valid");
        return true;
    }
}