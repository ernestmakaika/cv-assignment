function cvAssignment () {
    console.log ("cvAssignment");
    const indexForm = document.getElementById("form");
    indexForm.addEventListener("submit",indexValidation)
}

window.onload = cvAssignment;

function indexValidation (element, event){
    console.log(element);

    const firstName = document.getElementById("firstname").value;
    if (firstName.length==0){
        window.alert("Please, enter your first name.")
    }
    else {
        localStorage.setItem("firstname", firstName);
    };

    const lastName = document.getElementById("lastname").value;
    if (lastName.length==0){
    window.alert("Please, enter your last name.")
    }
    else {
        localStorage.setItem("lastname", lastName)
      

    };

    const address = document.getElementById("address").value;
    if (address.length==0){
        window.alert("Please, enter your address.")
    }
    else {
        localStorage.setItem("address", address);
        
    };

    const phone = document.getElementById("phone").value;
    if (phone.length==0){
        window.alert("Please, enter your phone number.")
    }
    else {
        localStorage.setItem("phone", phone)
        // const cvPhone = localStorage.getItem("phone")
    };
    
    const email = document.getElementById("email").value;
    if (email.length==0){
        window.alert("Please, enter your email.")
    }
    else{
        localStorage.setItem("email", email)
        // const cvEmail = localStorage.getItem("email")
    };

}