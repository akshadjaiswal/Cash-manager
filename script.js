const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".NoOfNotes");


var message = document.querySelector("#error-message")

const avilabelNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
button.addEventListener("click", CheckAmount);

function CheckAmount() {
    hideMessage();

    if (billAmount.value > 0) {
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            const AmountToBeReturn = cashGiven.value - billAmount.value;
            CalculateChange(AmountToBeReturn);

        } else {
            errorMessage("No money to be returned")
        }
    } else {
        errorMessage("Bill amount should be greater than zero")
    }
}

function hideMessage() {
    message.style.display = "none";

}

function errorMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;

}

function CalculateChange(AmountToBeReturn) {

    for (let i = 0; i < avilabelNotes.length; i++) {
        const Notes = Math.trunc(AmountToBeReturn / avilabelNotes[i]);

        AmountToBeReturn = AmountToBeReturn % avilabelNotes[i];
        noOfNotes[i].innerText = Notes;

    };


}