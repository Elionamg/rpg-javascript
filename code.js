
const personnage = {nom: "Eliona", pv: 100, potion: 3};

const vie = document.querySelector("#vie");
const boutonSoigner = document.querySelector("#soigner");
const attaque = document.querySelector("#attaquer");
const barreVie = document.querySelector("#barre-vie");
const inventaire = document.querySelector("#inventaire");


function majVie(){
    vie.textContent = "PV : " + personnage.pv;
    barreVie.style.width = personnage.pv + "%";
    inventaire.textContent = "Potions : " + personnage.potion;

    if(personnage.pv <= 0){
    vie.textContent = "Personnage KO !";
    boutonSoigner.disabled = true;
    attaque.disabled = true;
}
    if(personnage.potion <= 0){
        inventaire.textContent = "Plus de potions!";
        boutonSoigner.disabled = true;
    }
}


boutonSoigner.addEventListener("click", function() {
    if(personnage.potion > 0 && personnage.pv < 100){
        personnage.pv = Math.min(100, personnage.pv + 20);
    personnage.potion = personnage.potion - 1;
    majVie();
    }
})

attaque.addEventListener("click", function() {
    personnage.pv = Math.max(0, personnage.pv - 15)
    majVie();
})

majVie();