document.addEventListener('DOMContentLoaded', function() {
    const titre = document.getElementById('titre');
    const dateElement = document.getElementById('date');
    const changerCouleurButton = document.getElementById('changerCouleurButton');

    function getCouleurAleatoire() {
        const lettres = '0123456789ABCDEF';
        let couleur = '#';
        for (let i = 0; i < 6; i++) {
            couleur += lettres[Math.floor(Math.random() * 16)];
        }
        return couleur;
    }

    function changerCouleur() {
        titre.style.color = getCouleurAleatoire();
    }

    function afficherDate() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const jour = date.getDate();

        dateElement.textContent = date.toLocaleDateString('fr-FR', options);

        if (jour % 2 !== 0) {
            dateElement.classList.add('date-impair');
        } else {
            dateElement.classList.remove('date-impair');
        }
    }

    // Changer la couleur toutes les 5 secondes
    setInterval(changerCouleur, 5000);

    // Changer la couleur au clic sur le bouton
    changerCouleurButton.addEventListener('click', changerCouleur);

    // Afficher la date actuelle
    afficherDate();
});
