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
        localStorage.setItem('voyant1', 'red');
    }

    if (jour === 7) {
        localStorage.setItem('voyant2', 'red');
    }

    if (jourSemaine === 6) {  // 6 correspond à samedi
        localStorage.setItem('voyant3', 'red');
        localStorage.setItem('voyant4', 'red');
    }

    chargerEtatVoyants();
}

function changerCouleur(voyantId) {
    localStorage.setItem(voyantId, 'green');
    document.getElementById(voyantId).style.backgroundColor = 'green';
}

function chargerEtatVoyants() {
    document.querySelectorAll('.voyant-bulle').forEach(voyant => {
        const couleur = localStorage.getItem(voyant.id);
        if (couleur) {
            voyant.style.backgroundColor = couleur;
        }
    });
}

afficherDate();
verifierVoyants();
