function cvAssignment () {
    console.log ("cvAssignment");
    const indexForm = document.getElementById("form");
    indexForm.addEventListener("submit",indexValidation)
}

window.onload = cvAssignment;

function indexValidation (element, event){
    console.log(element);

    const firstName = document.getElementById("firstname");
    if (firstName.value.length==0){
        window.alert("Please, enter your first name.")
    }
    else {
        localStorage.setItem("firstname", firstName);
        const cvFirstname = localStorage.getItem("firstname")
    };

    const lastName = document.getElementById("lastname");
    if (lastname.value.length==0){
    window.alert("Please, enter your last name.")
    }
    else {
        localStorage.setItem("lastname", lastName)
        const cvLastname = localStorage.getItem("lastname")

    };

    const address = document.getElementById("address");
    if (address.value.length==0){
        window.alert("Please, enter your address.")
    }
    else {
        localStorage.setItem("address", address);
        const cvAddress = localStorage.getItem("address")
    };

    const phone = document.getElementById("phone");
    if (phone.value.length==0){
        window.alert("Please, enter your phone number.")
    }
    else {
        localStorage.setItem("phone", phone)
        const cvPhone = localStorage.getItem("phone")
    };
    
    const email = document.getElementById("email");
    if (email.value.length==0){
        window.alert("Please, enter your email.")
    }
    else{
        localStorage.setItem("email", email)
        const cvEmail = localStorage.getItem("email")
    };
}