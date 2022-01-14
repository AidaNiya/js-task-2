let cardNumber = prompt("Введите номер кредитной карты");
let hiddenPart = cardNumber.slice(0, -4).replace(/[0-9]/g, "*");
let visiblePart = cardNumber.slice(-4);
alert("Номер кредитной карты: " + hiddenPart + visiblePart);
