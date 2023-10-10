import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Voeg eengetal in :'));
let getal2 = parseFloat(await userInput.question('Voeg een tweede getal in :'));
let getal3 = parseFloat(await userInput.question('Voeg een derde getal in :'));
let getal4 = parseFloat(await userInput.question('Voeg een vierde getal in :'));
let getal5 = parseFloat(await userInput.question('Voeg een vijfd getal in :'));

 let getalen =[getal1, getal2, getal3,getal4, getal5];
let hoogste=Math.max(...getalen);
 console.log( 'Het hoogste getal is '+hoogste);
 let klein=Math.min(...getalen);
 console.log('Het klienste getal is '+klein);
 let gemiddelde=(getal1+getal2+getal3+getal4+getal5)
console.log('het gemiddelde getal is ' + gemiddelde/2)
process.exit();
