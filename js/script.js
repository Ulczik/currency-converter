{
   const weclome = () => {
      console.log("Hejka ;)")
   }

   const resultCalculation = (amount, currency) => {
      const rateEUR = 4.85;
      const rateGBP = 5.54;
      const rateUSD = 4.99;
      const rateJPY = 0.03;

      switch (currency) {
         case "EUR":
            return amount / rateEUR;

         case "GBP":
            return amount / rateGBP;

         case "USD":
            return amount / rateUSD;

         case "JPY":
            return amount / rateJPY;
      }
   };

   const resultElement = document.querySelector(".js-result");
   const resultText = (amount, currency, result) => {
      resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
   }

   const formSubmit = (event) => {
      event.preventDefault();

      const currencyElement = document.querySelector(".js-currency");
      const amountElement = document.querySelector(".js-amout");

      const amount = +amountElement.value;
      const currency = currencyElement.value;

      const result = resultCalculation(amount, currency)
      resultText(amount, currency, result);
   }

   const init = () => {
      const formElement = document.querySelector(".js-form");
      formElement.addEventListener("submit", formSubmit);
   }

   weclome();
   init();
}