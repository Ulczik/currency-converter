console.log("Hejka ;)")


let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amout");
let resuleElement = document.querySelector(".js-result");

let rateEUR = 4.85;
let rateGBP = 5.54;
let rateUSD = 4.99;
let rateJPY = 29.39;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;
    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "JPY":
            result = amount * rateJPY;
            break;
    }
    resuleElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
