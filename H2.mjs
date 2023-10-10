import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaar  = parseFloat(await userInput.question('Voeg een jaar in :'));
if (jaar%4==0 || jaar%400==0 ){
    console.log('februari heeft 29 dagen dit jaar');
}else {
    console.log('februari heeft 28 dagen dit jaar')
}
