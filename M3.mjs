import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
 let welkom= 'Welkom bij de quiz! Beantwoord de volgende 5 vragen:';
 console.log(welkom);

let score = 0;

let vraag1='Vraag 1: Wat is de hoofdstad van Frankrijk?';
console.log(vraag1);
let antwoord1=await userInput.question('JOuw antwoord: ');
if(antwoord1=='Parijs'){
    console.log('Goed Antwoord!');
    score++;
}else{
     console.log('Fout antwoord. Het juiste antwoord is: Parijs');
}


let vraag2='Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?';
console.log(vraag2);
let antwoord2=await userInput.question('JOuw antwoord: ');
if(antwoord2=='8'){
    console.log('Goed Antwoord!');
    score++;
}else{
     console.log('Fout antwoord. Het juiste antwoord is: 8');
}


let Vraag3=' Wat is het grootste zoogdier ter wereld?';
console.log(Vraag3);
let antwoord3=await userInput.question('JOuw antwoord: ');
if(antwoord3=='Blauwe vinvis'){
    console.log('Goed Antwoord!');
    score++;
}else{
     console.log('Fout antwoord. Het juiste antwoord is: Blauwe vinvis');
}


let vraag4='Wie schreef het toneelstuk (Romeo en Julia)?';
console.log(vraag4);
let antwoord4=await userInput.question('JOuw antwoord: ');
if(antwoord4=='Shakespeare'){
    console.log('Goed Antwoord!');
    score++;
}else{
     console.log('Fout antwoord. Het juiste antwoord is: Shakespeare');
}


let vraag5=' Hoeveel poten heeft een spin?';
console.log(vraag5);
let antwoord5=await userInput.question('JOuw antwoord: ');
if(antwoord5=='8'){
    console.log('Goed Antwoord!');
    score++
}else{
     console.log('Fout antwoord. Het juiste antwoord is: 8');
}

console.log('Je hebt '+score +  'van de 5 vragen juist beantwoord.')




