/* creation of the 2 types of theme for the quotes */

let theme = {
    salutation: {
        startFragments: [
            'Coucou,', 'Bonjour,', 'Bon appétit,', 'Bonsoir,', 'Bonne nuit,'
        ],
        middleFragments: [
            'il fait froid,', 'il fait chaud,', 'au plaisir de te rencontrer,', 'la journée est magnifique,', 'tu es très belle,'
        ],
        endFragments: [
            'au revoir.', 'à très bientôt.', 'adieu.', 'on reste en contact.', 'au revoir.', 'au plaisir.'
        ]
    },

    activity: {
        startFragments: [
            'Il est temps de', 'C\'est parti pour', 'Suis-moi pour', 'Cours et viens', 'Echape-toi et commence à'
        ],
        middleFragments: [
            'dancer', 'voyager', 'peindre', 'jouer', 'découvrir'
        ],
        endFragments: [
            'doucement.', 'avec plaisir.', 'avec lui.', 'tous les jours.', 'en musique.', 'rapidement.'
        ]
    },
}

/*Creation of the method to generate a random number*/
let generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* Creation of the method to generate a random frangment with the random number */
let generateRandomFragment = (fragments) => {
    return fragments[generateRandomNumber(0, fragments.length - 1)]
}

/*Creation of the method to generate the quote with the selected theme adding 3 random parts : start, middle and end Frangment */
let generateQuote = (selectedTheme) => {
    return generateRandomFragment(selectedTheme.startFragments) + ' ' + generateRandomFragment(selectedTheme.middleFragments) + ' ' + generateRandomFragment(selectedTheme.endFragments);
}


/*Creation of the method to show the quote with the list li*/
let showQuotes = (numberOfQuotesSelected, selectedTheme) => {
    document.getElementById("quotes").innerHTML = "" /*--> to reset the quote because it would add more quote to the list if not)*/

    for (let i = 0; i < numberOfQuotesSelected; i++) {
        document.getElementById("quotes").innerHTML += "<li>" + generateQuote(selectedTheme) + "</li> <br>"
    }
}

/*Method is called when form is submitted - showing quotes depending of the data selected in the form*/
let submitForm = (event) => {
    event.preventDefault();

    let themeValue = event.target.elements.theme.value
    let numberValue = event.target.elements.number.value


    if (themeValue == "salutation") {
        showQuotes(parseInt(numberValue), theme.salutation)
    }
    if (themeValue == "activity") {
        showQuotes(parseInt(numberValue), theme.activity)
    }
}

/*Method is called when end button in HTML is clicked. */
let end = () => {
    document.getElementsByTagName('body')[0].innerHTML = '';
    alert('Merci pour votre visite !')
}