import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artist = await userInput.question('Kies een artiest: \n  1. Red Hot Chili Peppers   \n  2. AC/DC \n  3. Netsky \n  4. De Strangers \n  Geef je keuze in: ');;
let song=0




switch( artist){
    case '1' : 
song='Calification';
break;
case '2' :
    song='Thunderstruck';
    break;
    case '3' :
        song='Puppy';
        break;
        case '4':
            song='Medley';
            break;
            default:
                console.log('this artist is not avalable ');
}
console.log(' Your song is ' +song);
 



process.exit();
