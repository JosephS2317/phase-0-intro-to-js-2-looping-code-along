// Code your solutions in this file
const nameList = ["Gudalupe", "Ollie", "Aki"];

function writeCards(names){
    let msgs = [];
    for (let i=0; i < names.length; i++){
       let currMsg = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        msgs.push(currMsg); 
    }
    return msgs;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}



