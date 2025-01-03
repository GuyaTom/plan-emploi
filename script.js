document.addEventListener('DOMContentLoaded', function() {
    const titre = document.getElementById('titre');
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

    // Changer la couleur toutes les 5 secondes
    setInterval(changerCouleur, 5000);

    // Changer la couleur au clic sur le bouton
    changerCouleurButton.addEventListener('click', changerCouleur);
});
