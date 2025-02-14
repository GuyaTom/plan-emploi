function afficherDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = date.toLocaleDateString('fr-FR', options);
}

function verifierVoyants() {
    const date = new Date();
    const jour = date.getDate();
    const jourSemaine = date.getDay();

    if (jour >= 25) {
        document.getElementById('voyant1').style.backgroundColor = 'red';
    }

    if (jour === 7) {
        document.getElementById('voyant2').style.backgroundColor = 'red';
    }

    if (jourSemaine === 6) {  // 6 correspond à samedi
        document.getElementById('voyant3').style.backgroundColor = 'red';
    }
}

function changerCouleur(voyantId) {
    document.getElementById(voyantId).style.backgroundColor = 'green';
}

afficherDate();
verifierVoyants();
