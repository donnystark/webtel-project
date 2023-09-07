
let RegisterForm;

window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {

            RegisterForm = data['RegisterForm'];

            let displayRegisterForm = RegisterForm.map(function (item) {

                let formControlHTML = '';
                

                if (item.field === "select") {
                    const options = item.options.map(option =>
                        `<option value="${option.value}">${option.label}</option>`
                    ).join("");

                    return `
                            <div id="mainForm" class="form-control">
                            <label class="label" for="${item.for}">${item.label}<span class="important">${item.important}</span></label>
                            <select class="input" name="${item.for}" id="${item.id}" ${item.display}>${options}</select>
                    </div>
                    `
                }

                else if (item.field === "input" && item.MI === "three") {
                    const inputs = item.inputs.map(input =>
                        `<input class="inputM" type="${item.type}" id="${item.id}" name="${item.for}" ${item.display}/>`
                    ).join("");

                    return `
                    <div id="mainForm" class="form-control" >
                    <label class="label" for="${item.for}">${item.label}<span class="important">${item.important}</span></label>
                    <div class="inputMI">
                    ${inputs}
                    </div>
                    </div>
                    `
                }

                else if (item.field === "input") {

                    formControlHTML = `
                    <div id="mainForm" class="form-control">
                    <label class="label" for="${item.for}">${item.label}<span class="important">${item.important}</span></label>
                    <input class="input" type="${item.type}" id="${item.id}" name="${item.for}" inputmode="none" ${item.display}/>
                    </div>
                    `;
                }
                return formControlHTML;

                
            });

            let RF = displayRegisterForm.join("");
            document.getElementById("rf").innerHTML = RF;

            let i = 0;
            const b = RegisterForm.length;

            function enableAndFocusNextField() {
                
                if (i < b) {
                    RegisterForm[i].display = "";
                    const element = document.getElementById(RegisterForm[i].id);
                    if (element) {
                        element.disabled = false;
                        element.focus();
                    }
                    i++;
                }
            }

            RegisterForm.forEach(function (item) {

                if (item.field === "input" && item.id === "name" || item.id === "cn" || item.id === "city") {
                    const inputElement = document.getElementById(`${item.id}`);

                    inputElement.addEventListener("input", function () {
                        validateNameString(inputElement);
                    });
                }

                if (item.field === "input" && item.id === "pincode" || item.id === "phone1" || item.id === "mobilenum" || item.id === "phone2") {
                    const inputElement = document.getElementById(`${item.id}`);

                    inputElement.addEventListener("input", function () {
                        validateNumber(inputElement);
                    });
                }

                if (item.field === "input" && item.id === "gstin" || item.id === "RI") {
                    const inputElement = document.getElementById(`${item.id}`);

                    inputElement.addEventListener("input", function () {
                        validateToUppercase(inputElement);
                    });
                }

                if (item.field === "input" || item.field === "select") {
                    const inputElement = document.getElementById(`${item.id}`);

                    inputElement.addEventListener("keydown", function (event) {
                        if (event.key === "Enter") {
                            enableAndFocusNextField();
                        }
                    });
                }

            });

            const submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", function () {
                if (validateSubmit()) {

                    document.getElementById("rf").submit();
                }
            });

        });

    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearFormFields);
});


function clearFormFields() {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.value = '';
    });


    const selectFields = document.querySelectorAll('select');
    selectFields.forEach(select => {
        select.selectedIndex = 0;
    });


}

function validateSubmit() {
    if (!RegisterForm) {
        console.error("RegisterForm is not defined. Please check your code.");
        return false;
    }
    const importantFields = RegisterForm.filter(item => item.important === "*");
    for (const item of importantFields) {
        const inputElement = document.getElementById(`${item.id}`);
        const inputValue = inputElement.value.trim();

        if (inputValue.length === 0) {
            alert("Please fill in all important fields.");
            return false;
        }
    }
    return true;
}

function validateNameString(inputElement) {

    let inputValue = inputElement.value;
    inputValue = inputValue.replace(/\b\w/g, match => match.toUpperCase());
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(inputValue)) {
        // alert("Please enter alphabets and spaces only in the Name field.");
        inputElement.value = inputValue.replace(/[^A-Za-z\s]/g, "");
    } else {
        inputElement.value = inputValue;
    }
}

function validateNumber(inputElement) {
    const inputValue = inputElement.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '')

    if (numericValue !== inputValue) {
        inputElement.value = numericValue;
    }
}

function validateToUppercase(inputElement) {
    let inputValue = inputElement.value;

    inputValue = inputValue.replace(/[a-z]/g, function (match) {
        return match.toUpperCase();
    });
    inputElement.value = inputValue;
}


