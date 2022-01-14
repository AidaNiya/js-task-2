/* //Первый вариант с RegExp
let rootString = "ddd@bbb@ccc";
let replaceSymbole = /@/gi;
let newSymbole = "!";
let newString = rootString.replace(replaceSymbole, newSymbole);
alert(newString);
*/

//Второй вариант замены всех элементов
let str = "ddd@bbb@ccc";
let replaceSymbole = "@";
let newSymbole = "!";
let result = str.replaceAll(replaceSymbole, newSymbole);
alert(result);
