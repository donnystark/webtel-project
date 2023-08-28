
window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const RegisterForm = data['RegisterForm'];

            let displayRegisterForm = RegisterForm.map(function (item) {



                if (item.field === "select") {

                    const options = item.options.map(option =>
                        `<option value="${option.value}">${option.label}</option>`
                    ).join("");

                    return `
                    <div class="form-control">
                            <label class="label" for="${item.for}">${item.label}<span class="important">${item.important}</span></label>
                            <select class="input" name="${item.for}" id="${item.for}">${options}</select>
                    </div>
                    `
                }

                else if (item.field === "input" && item.MI === "three") {
                    return `
                    <div class="form-control">
                            <label class="label" for="${item.for}">${item.label}<span class="important">${item.important}</span></label>
                            <div class="inputMI">
                            <input class="inputM" type="${item.type}" id="" name="${item.for}" />
                            <input class="inputM" type="${item.type}" id="" name="${item.for}" />
                            <input class="inputM" type="${item.type}" id="" name="${item.for}" />
                            </div>
                    </div>
                    `
                }

                else if (item.field === "input") {
                    return `
                    <div class="form-control">
                            <label class="label" for="${item.for}">${item.label}<span class="important">${item.important}</span></label>
                            <input class="input" type="${item.type}" id="" name="${item.for}" />
                    </div>
                    `;
                }




            });

            let RF = displayRegisterForm.join("");
            document.getElementById("rf").innerHTML = RF;
        })
});




// // form

// const form = document.getElementById("registration_form");

// const passwordInput = document.getElementById("password");
// const password = passwordInput.value;

// const confirmPass = document.getElementById("confirm_password");
// const confirmValue = confirmPass.value;



// document.addEventListener("DOMContentLoaded", function () {

//     // first-name

//     const firstName = document.getElementById("first_name");

//     firstName.addEventListener("input", function () {
//         let fnValue = firstName.value;
//         if (fnValue.length > 0) {
//             fnValue = fnValue.charAt(0).toUpperCase() + fnValue.slice(1);
//             firstName.value = fnValue;
//         }
//     });

//     // last-name

//     const lastName = document.getElementById("last_name");

//     lastName.addEventListener("input", function () {
//         let lnValue = lastName.value;
//         if (lnValue.length > 0) {
//             lnValue = lnValue.charAt(0).toUpperCase() + lnValue.slice(1);
//             lastName.value = lnValue;
//         }
//     });


//     // gst-number

//     const gstNum = document.getElementById("gst_no");

//     gstNum.addEventListener("input", function () {
//         let gstValue = gstNum.value;
//         let modifiedValue = '';

//         for (let i = 0; i < gstValue.length; i++) {
//             let currentChar = gstValue.charAt(i);

//             if (currentChar >= 'a' && currentChar <= 'z') {
//                 modifiedValue += currentChar.toUpperCase();
//             } else {
//                 modifiedValue += currentChar;
//             }
//         }

//         gstNum.value = modifiedValue;
//     });

// });


// form.addEventListener("submit", (event) => {

//     event.preventDefault();

//     //email-id

//     const emailID = document.getElementById("email_id");
//     const errorMessage = document.getElementById("error_message");

//     emailID.addEventListener("submit", function (event) {
//         let emailValue = emailID.value;
//         const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//         if (!emailPattern.test(emailValue)) {
//             event.preventDefault();
//             errorMessage.textContent = "Please enter a valid email address.";
//         } else {
//             errorMessage.textContent = "";
//         }
//     });


//     for (let controlGroups of formControlGroup) {
//         if (controlGroups.classList.contains("error")) {
//             alert("Please provide all required details");
//             return;
//         }
//     }

//     passwordInput.addEventListener("submit", function (event) {


//         const uppercasePattern = /[A-Z]/;
//         const hasUppercase = uppercasePattern.test(password);


//         const lowercasePattern = /[a-z]/;
//         const hasLowercase = lowercasePattern.test(password);


//         const digitPattern = /\d/;
//         const hasDigit = digitPattern.test(password);


//         const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/;
//         const hasSpecialCharacter = specialCharacterPattern.test(password);


//         if (hasUppercase && hasLowercase && hasDigit && hasSpecialCharacter) {
//             errorMessage.textContent = ""; // Clear error message
//         } else {
//             errorMessage.textContent = "Password must contain special characters, uppercase, lowercase, and numbers.";
//         }
//     });


//     if (password !== confirmValue) {
//         alert("Password and Confirm Password Must be the Same!");
//         return;
//     }

//     form.submit();
//     alert("Form submitted successfully!");



// });
