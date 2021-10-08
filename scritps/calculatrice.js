
let calcul = "";

let ajouterAuCalcul = (caractere) => {
    calcul += caractere;
}

let calculer = () =>{
    document.querySelector("#resultat").value = eval(calcul);
}