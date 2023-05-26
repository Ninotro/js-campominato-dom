intArray = createNumRandomOrderArray(1, 16)


    


console.log(intArray);
var punteggio = 0



// salvo l'elemento della tabella e del bottone
const tabella = document.querySelector (".grid");
const button = document.getElementById ("play");

// al click inserisco la classe active che fa visualizazre la grid
button.addEventListener ("click",
function () {

    tabella.classList.add ("active")

}

)

// ciclo per creare 100 numeri casuali

for (let i=1 ; i<101 ; i++) {



    
    var newsquare = createGridSquare("div","square")
   
    tabella.append(newsquare)
    newsquare.append([i])

    
    newsquare.addEventListener("click",
    function(){
          
        if (!intArray.includes(i)) {
        this.classList.add ("blue")
        punteggio = punteggio + 1

        console.log(punteggio);
       
        
        
        
    }
    else {
        this.classList.add ("red")
        
        
        alert("mi dispiace hai perso! il tuo punteggio è:" + punteggio );
        
}
}
        
   
        
    
    )
    
}       









// Funzioni
// funzione per creare i box all'interno della grid
function createGridSquare (tagtype,classToAdd) {
    const newElement = document.createElement (tagtype);
    newElement.classList.add (classToAdd);
    return newElement
}

// creo la funzione per generare numeri random entro un min max

function RandomMinMax (numMin, numMax) {
     return Math.floor(Math.random() * (numMax - numMin + 1) + numMin );
     
}






// Array in ordine casuale
function createNumRandomOrderArray(min, max) {
    const intArray= [];

    while (intArray.length<max) {

        const nuovoNum = RandomMinMax(1,100)
        if (!intArray.includes(nuovoNum)){
            intArray.push(nuovoNum)
        }
    }

    return intArray
}




