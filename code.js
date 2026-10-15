let pv = 100;
let potion = 3;

const vie = document.querySelector("#vie");
const bouton = document.querySelector("#soigner");
const attaque = document.querySelector("#attaquer");
const barreVie = document.querySelector("#barre-vie");
const inventaire = document.querySelector("#inventaire");


function majVie(){
    vie.textContent = "PV : " + pv;
    barreVie.style.width = pv + "%";
    inventaire.textContent = "Potions : " + potion;

    if(pv <= 0){
    vie.textContent = "Personnage KO !";
    bouton.disabled = true;
    attaque.disabled = true;
}
    if(potion <= 0){
        inventaire.textContent = "Plus de potion!";
        bouton.disabled = true;
    }
}


bouton.addEventListener("click", function() {
    if(potion > 0 && pv < 100){
        pv = Math.min(100, pv + 20);
    potion = potion - 1;
    console.log(potion);
    majVie();
    }
})

attaque.addEventListener("click", function() {
    pv = Math.max(0, pv - 15)
    majVie();
})

majVie();