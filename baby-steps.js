let argument = process.argv;
let total = 0;

for(let i = 2; i < (argument.length); i++)
{
    total += Number(argument[i]);
}

console.log(total);