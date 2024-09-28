import * as readline from 'readline-sync';

let mark:number= Number(readline.question('Enter your score'));
if(mark>=50){
    console.log('Passed');
}else{
    console.log('Failed');
    
}