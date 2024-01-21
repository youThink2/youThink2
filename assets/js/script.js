
document.addEventListener("DOMContentLoaded", function () {

    //sgtores contact form
    const form = document.querySelector(".contactForm");

    //checking if submit button is pressed (event listener)
    form.addEventListener("submit", function (event) {
        
        //prevents default form submission from happening (in order to let us validate)
        event.preventDefault();

        //validate the form
        if (validateForm()) {
            
            form.submit();
            alert("Form submitted successfully!");
        }
    });

    function validateForm() {
        let isValid = true;

        //validate First Name
        const firstName = document.getElementById("firstName").value.trim();
        if (firstName === "") {
            alert("Please enter your First Name");
            isValid = false;
        }

        //Validate Last Name
        const lastName = document.getElementById("lastName").value.trim();
        if (lastName === "") {
            alert("Please enter your Last Name");
            isValid = false;
        }

        //Validate Email Address
        const email = document.getElementById("emailInput").value.trim();
        if (!isValidEmail(email)) {
            alert("Please enter a valid Email Address");
            isValid = false;
        }

        

        // Validate Subject
        const subject = document.getElementById("subject").value.trim();
        if (subject === "") {
            alert("Please enter a Subject");
            isValid = false;
        }

        //Validate Message
        const message = document.querySelector("textarea").value.trim();
        if (message === "") {
            alert("Please enter a Message");
            isValid = false;
        }

        return isValid;
    }



    
    function isValidEmail(email) {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//email expression
        return emailRegex.test(email);
    }

    
});

