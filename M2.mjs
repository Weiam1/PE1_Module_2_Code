import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('voeg eengetal in :'));
let getal2 = parseFloat(await userInput.question('voeg een andere getal in :'));
let operatie= await userInput.question('Wilt u de twee getallen \n 1-optellen \n 2-aftrekken \n 3-vermenigvuldigen  \n 4-delen \n ');
 
if( operatie=='1'){
    console.log( 'Het resultaat is ' +(getal1+getal2));
}else if ( operatie=='2'){
    console.log( 'Het resultaat is ' +(getal1-getal2));
}else if ( operatie=='3'){
    console.log( 'Het resultaat is ' +(getal1*getal2));
}else if ( operatie=='4'){
    console.log( 'Het resultaat is ' +(getal1/getal2));
}
process.exit();