function main() {
    var niveau, justePrix, proposition, nombreTentatives, max;
    var rejouer;
    do {
        // Afficher le menu
        window.alert("Choisissez votre niveau : ");
        window.alert("1 = facile : entre 1 et 10 ");
        window.alert("2 = moyen : entre 1 et 100");
        window.alert("3 = difficile : entre 1 et 1000 ");
        niveau = window.prompt('Enter a value for niveau');
        // Sécuriser le niveau
        while (niveau < 1 || niveau > 3) {
            window.alert("Erreur : niveau inconnu! Entrez un nombre entre 1 et 3 ");
            niveau = window.prompt('Enter a value for niveau');
            // En fonction du niveau générer le juste prix et afficher
        }
        if (niveau == 1) {
            window.alert("Niveau facile ");
            max = 10;
        } else {
            if (niveau == 2) {
                window.alert("Niveau moyen ");
                max = 100;
            } else {
                window.alert("Niveau difficile ");
                max = 1000;
            }
        }
        justePrix = Math.floor(Math.random() * max) + 1;
        window.alert("Le juste prix est : " + justePrix);
        // Boucle pour faire les propositions
        nombreTentatives = 1;
        do {
            window.alert("Entrez votre proposition ");
            proposition = window.prompt('Enter a value for proposition');
            // Vérifier que la proposition est dans les bornes
            while (proposition < 1 || proposition > max) {
                window.alert("Erreur : la proposition n'est pas entre les bornes 1 et " + max);
                proposition = window.prompt('Enter a value for proposition');
            }
            if (proposition != justePrix) {
                if (proposition < justePrix) {
                    window.alert("C'est plus ");
                } else {
                    window.alert("C'est moins ");
                }
            }
            nombreTentatives = nombreTentatives + 1;
        } while (justePrix != proposition && nombreTentatives < 10);
        if (justePrix == proposition) {
            window.alert("C'est gagné en " + nombreTentatives + " tentatives");
        } else {
            window.alert("C'est perdu! Le juste prix était : " + justePrix);
        }
        window.alert("Voulez-vous rejouer ? ");
        rejouer = window.prompt('Enter a value for rejouer');
    } while (rejouer);
    window.alert("Merci et au revoir ");
}
let button = document.getElementById("button")
button.addEventListener('click', function() {
    main()
})