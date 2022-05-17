let moznosti = ['kamen', 'papier', 'noznice']


function computerPlay() {
return moznosti[Math.floor(Math.random()*moznosti.length)]
}
  

let hrac = 0
let pocitac = 0


function kamen() {
    let pocitacVyber = computerPlay()
    if(pocitacVyber == 'kamen') {
        document.getElementById("hodnotenie").innerHTML = "Remíza";
    } else if (pocitacVyber == 'papier') {
        document.getElementById("hodnotenie").innerHTML = "Prehrali ste ";
        pocitac += 1
    }
    else if(pocitacVyber == 'noznice') {
        document.getElementById("hodnotenie").innerHTML = "Vyhrali ste ";
        hrac += 1
    }
    document.getElementById("skoreH").innerHTML = hrac;
document.getElementById("skoreP").innerHTML = pocitac;
rozhodca()
}

function papier() {
    let pocitacVyber = computerPlay()
    if(pocitacVyber == 'kamen') {
        document.getElementById("hodnotenie").innerHTML = "Vyhrali ste";
        hrac += 1
    } else if (pocitacVyber == 'papier') {
        document.getElementById("hodnotenie").innerHTML = "Remíza ";
    }
    else if(pocitacVyber == 'noznice') {
        document.getElementById("hodnotenie").innerHTML = "Prehrali ste ";
        pocitac += 1
    }
    document.getElementById("skoreH").innerHTML = hrac;
document.getElementById("skoreP").innerHTML = pocitac;
rozhodca()
}

function noznice() {
    let pocitacVyber = computerPlay()
    if(pocitacVyber == 'kamen') {
        document.getElementById("hodnotenie").innerHTML = "Prehrali ste ";
        pocitac += 1
    } else if (pocitacVyber == 'papier') {
        document.getElementById("hodnotenie").innerHTML = "Vyhrali ste ";
        hrac += 1
    }
    else if(pocitacVyber == 'noznice') {
        document.getElementById("hodnotenie").innerHTML = "Remíza ";
    }
    document.getElementById("skoreH").innerHTML = hrac;
document.getElementById("skoreP").innerHTML = pocitac;
rozhodca()
}


function rozhodca() {
    if(pocitac == 5) {
        document.getElementById('verdikt').innerHTML = 'Súťaž vyhral počítač!';
    }
    else if(hrac == 5) {
        document.getElementById('verdikt').innerHTML = 'Súťaž ste vyhrali! Gratulujeme!';
    }
    else {
        document.getElementById('verdikt').innerHTML = '';
    }
}




