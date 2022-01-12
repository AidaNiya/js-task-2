let replaceSymbole = /@/gi;
let rootString = "ddd@bbb@ccc";
let newSymbole= "!";
let newString = rootString.replace(replaceSymbole, newSymbole );
alert(newString);
