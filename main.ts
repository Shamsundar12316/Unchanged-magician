// question 43 // continue with question 42// make array copy// unchanged magician

let magician: string[] = ["Harry potter","Hermoine Granger","Ron weasley","Albus Dumbledore"];

function copyArray(arr: string[]){
      return[...arr]
}


function make_great(magicianArray: string[]){
    for(let i=0; i<magicianArray.length; i++){

        magicianArray[i] = "the great " + magicianArray[i]
    }
}

function show_magician(magician: string[]){
     magician.forEach(element => {
        console.log(element);
     })
}


const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log(`\n\nThis is my oeiginal array:`);
show_magician(magician);

console.log(`\n\nThis is my modified copy of the array:`);
show_magician(copyMagicianArray)
