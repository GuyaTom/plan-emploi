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

    changerCouleurButton.addEventListener('click', function() {
        titre.style.color = getCouleurAleatoire();
    });
});
