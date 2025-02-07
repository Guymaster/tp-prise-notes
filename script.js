//  Model
let notes = [
    "Acheter du pain",
];

// View
function refresh(){
    let parent = document.getElementById("liste");
    parent.innerHTML = "";
    for(let n of notes){
        let elt = document.createElement("article");
        elt.innerText = n;
        parent.appendChild(elt);
    }
}

// Controller
const btn = document.getElementById("btn");
function ajouterNote(e){
    e.preventDefault();
    let texte = document.forms["note"]["texte"].value;
    notes.push(texte);
    refresh();
}
btn.addEventListener("click", ajouterNote);


refresh();