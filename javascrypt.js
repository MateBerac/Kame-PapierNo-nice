let moznosti = ['kamen', 'papier', 'noznice']

function computerPlay() {
return moznosti[Math.floor(Math.random()*moznosti.length)]
}
  

let hrac = 0
let pocitac = 0

function Kolo() {
    const vstup = prompt('Zadajte Váš ťah proti počítaču!', 'kamen,papier alebo noznice');   
    let hracovVyber = vstup.toLowerCase();
    let pocitacVyber = computerPlay() 
    let robot = alert('Počítač si vybral: ' + pocitacVyber);
if (hracovVyber === pocitacVyber) {
    alert('Remíza')
} else if (hracovVyber == 'kamen' && pocitacVyber == 'papier' ) {
    alert('Prehrali ste, papier poráže kameň')
  pocitac += 1 
} else if (hracovVyber == 'papier' && pocitacVyber == 'kamen' ) {
    alert('Vyhrali ste, papier poráža kameň')
    hrac += 1 
} else if (hracovVyber == 'noznice' && pocitacVyber == 'papier' ) {
    alert('Vyhrali ste, nožnice porážajú papier')
    hrac += 1 
} else if (hracovVyber == 'papier' && pocitacVyber == 'noznice' ) {
    alert('Prehrali ste, nožnice porážajú papier')
    pocitac += 1 
} else if (hracovVyber == 'noznice' && pocitacVyber == 'kamen' ) {
    alert('Prehrali ste, kameň poráža nožnice')
    pocitac += 1 
} else if (hracovVyber == 'kamen' && pocitacVyber == 'noznice' ) {
    alert('Vyhrali ste, kameň poráža nožnice')
    hrac += 1 
}
}

function Hra() {
let pocitadlo = 1    
while (pocitadlo < 6) {
 Kolo();
 pocitadlo += 1
}  
if (hrac > pocitac ) {
    alert('Vyhrali ste viac hier a preto ste absolútnym výťazom!')
} else if (hrac < pocitac) {
    alert('Počítač Vás porazil, nabudúce budete mať možno viacej šťastia') }
 else if (hrac == pocitac) 
 {
    alert('Stalo sa nemožné a nastala remíza :D')
} else {
    alert('ja som jahoda')
}
alert(hrac)
alert(pocitac)
}
