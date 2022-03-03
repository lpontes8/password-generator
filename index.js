const result = document.getElementById("result");
const length = document.getElementById("length");
const number = document.getElementById("number");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const specialChars = document.getElementById("special-char");
const btnSubmit = document.getElementById("btn-submit");

const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = uppercaseLetters.map((letter) => (letter.toLowerCase()));
const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (number.toString()));
const specialCharList = ['!', '@', '$', '&', '%', '+', '-', '='];

function insertUpper() {
    return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

function insertLower() {
    return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

function insertNumber() {
    return numbersList[Math.floor(Math.random() * numbersList.length)];
}

function insertSpecial() {
    return specialCharList[Math.floor(Math.random() * specialCharList.length)];
}

function generatePassword() {

    if ((length.value > 0 && length.value < 31) && (number.checked || uppercase.checked || lowercase.checked || specialChars.checked)) {
        const lengthValue = length.value;

        let generatedPassword = '';

        while (1) {

            if (uppercase.checked) {
                generatedPassword += insertUpper();
            }

            if (lowercase.checked) {
                generatedPassword += insertLower();
            }

            if (uppercase.checked) {
                generatedPassword += insertNumber();
            }

            if (uppercase.checked) {
                generatedPassword += insertSpecial();
            }

            if (generatedPassword.length > lengthValue) {
                break;
            }

        }

        generatedPassword = generatedPassword.slice(-(lengthValue));

        result.innerText = generatedPassword;
    } else {
        alert('Please, select the length (1 to 30) and at least one character type.');
    }

}

btnSubmit.addEventListener("click", generatePassword);