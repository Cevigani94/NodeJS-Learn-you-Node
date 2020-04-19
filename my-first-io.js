const fs = require('fs');  // Aufforderung an dem Filesystem Module
// Die Funktionen, die in die Module enthalten sind, enden immer mit das Wort 'Sync'
const consoleArguments = process.argv;

let buffer = fs.readFileSync(consoleArguments[2]);

const String = buffer.toString();
const arrayString = String.split();

let delimitersCounter = 0;
for(let i = 0; i < arrayString.length; i++)
{
    if(arrayString[i] == '\n')
    {
        console.log(arrayString[i]);
        delimitersCounter++;
    }
}

console.log(delimitersCounter);