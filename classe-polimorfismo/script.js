//superclasse
class Ave {
    //método
    voar(){
        console.log("A ave voa.");
    }
}

// Subclasse

class Pinguim extends Ave {
    //spolimorfismo
    voar() {
        console.log("Pinguins não podem voar.");
    }
}

// Instânciando
let ave = new Ave();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();