 //////////////////////////////////
/////ul li options of top nav/////
//////////////modals//////////////
//////////////////////////////////
const aboutModal = document.querySelector('.about-modal');
const openAboutModal = document.querySelector('.open-about');
const closeAboutModal = document.querySelector('.close-about-modal');

openAboutModal.addEventListener('click', () => {
    aboutModal.showModal();
})
closeAboutModal.addEventListener('click', () => {
    aboutModal.close();
})

const currencyModal = document.querySelector('.currency-modal');
const openCurrencyModal = document.querySelector('.open-currency');
const closeCurrencyModal = document.querySelector('.close-currency-modal');

openCurrencyModal.addEventListener('click', () => {
    currencyModal.showModal();
})
closeCurrencyModal.addEventListener('click', () => {
    currencyModal.close();
})

const familyFilterModal = document.querySelector('.family-filter-modal');
const openFamilyFilterModal = document.querySelector('.open-family-filter');
const closeFamilyFilterModal = document.querySelector('.close-family-filter-modal');

openFamilyFilterModal.addEventListener('click', () => {
    familyFilterModal.showModal();
})
closeFamilyFilterModal.addEventListener('click', () => {
    familyFilterModal.close();
})

const contactUsModal = document.querySelector('.contact-us-modal');
const openContactUsModal = document.querySelector('.open-contact-us');
const closeContactUsModal = document.querySelector('.close-contact-us-modal');

openContactUsModal.addEventListener('click', () => {
    contactUsModal.showModal();
})
closeContactUsModal.addEventListener('click', () => {
    contactUsModal.close();
})

//when search div clicked, show it
document.querySelector('.search-div').addEventListener('click', function() {
    this.classList.add('clicked-input');
});

///////////////////
//filter category//
//////////////////

function clearDisplay(){
    const gameLists = document.querySelectorAll('.gameList');
    gameLists.forEach(element => {
        element.style.display = '';
    });
}

document.getElementById('showAction').addEventListener('click', function(event){
    event.preventDefault();

    const gameListAction = document.querySelectorAll('.gameList');
    clearDisplay();

    gameListAction.forEach(element => {
        if(!element.classList.contains('action')){
                element.style.display= 'none';
        };
    });
});

document.getElementById('showAdventure').addEventListener('click', function(event){
    event.preventDefault();

    const gameListAdventure = document.querySelectorAll('.gameList');
    clearDisplay();

    gameListAdventure.forEach(element => {
        if(!element.classList.contains('adventure')){
                element.style.display= 'none';
        };
    });
});

document.getElementById('showCasual').addEventListener('click', function(event){
    event.preventDefault();

    const gameListCasual = document.querySelectorAll('.gameList');
    clearDisplay();

    gameListCasual.forEach(element => {
        if(!element.classList.contains('casual')){
                element.style.display= 'none';
        };
    });
});

document.getElementById('showHorror').addEventListener('click', function(event){
    event.preventDefault();

    const gameListHorror = document.querySelectorAll('.gameList');
    clearDisplay();

    gameListHorror.forEach(element => {
        if(!element.classList.contains('horror')){
                element.style.display= 'none';
        };
    });
});

document.getElementById('showSimulation').addEventListener('click', function(event){
    event.preventDefault();

    const gameListSimulation = document.querySelectorAll('.gameList');
    clearDisplay();

    gameListSimulation.forEach(element => {
        if(!element.classList.contains('simulation')){
                element.style.display= 'none';
        };
    });
});

///////////////////
//currency change//
//////////////////
document.addEventListener('DOMContentLoaded', () => {
    // Store initial prices
    const prices = document.querySelectorAll('.game-price p');
    prices.forEach(priceElement => {
        priceElement.dataset.original = parseFloat(priceElement.textContent.replace(/^\$/, ''));
    });

    document.getElementById('changeCurrency').addEventListener('click', () => {
        const selectCurrency = document.querySelector('input[name="currencyForm"]:checked');
        
        prices.forEach(priceElement => {
            const originalPrice = parseFloat(priceElement.dataset.original);
            let totalPrice = originalPrice;
            let symbol = '$';

            switch (selectCurrency.value) {
                case 'dollar':
                    totalPrice = originalPrice; // No conversion needed
                    symbol = '$';
                    break;
                case 'euro':
                    totalPrice = originalPrice * 1.07;
                    symbol = '€';
                    break;
                case 'phpeso':
                    totalPrice = originalPrice * 57.20;
                    symbol = '₱';
                    break;
                case 'pound':
                    totalPrice = originalPrice * 0.9;
                    symbol = '£';
                    break;
            }
            priceElement.textContent = symbol + totalPrice.toFixed(2);
        });
    });
});

/////////////////
//family filter//
////////////////

document.getElementById('changeFamilyFilter').addEventListener('click', function() {
    const familyFilter = document.querySelector('input[name="familyFilterForm"]:checked').value;
    const gameListFamilyFilter = document.querySelectorAll('.gameList');
    clearDisplay();

    gameListFamilyFilter.forEach(gameListFamilyFilter => {
        if (familyFilter === 'yes'){
            if (!gameListFamilyFilter.classList.contains('familyFriendly')){
                gameListFamilyFilter.style.display = 'none';
            }      
        }
    })
});

///////////////////
///Auto Complete///
///////////////////

const searchInput = document.querySelector('.main-search-bar');
const autocompleteResults = document.querySelector('.suggest-search');

const games = [
    'content warning','melatonin','amazing cultivation','rim world','otxo',
    'warm snow','battle brothers','hyper charge','viscera cleanup','dave the diver',
    'day of defeat','nimbus','pneuma','majesty gold','pummel party',
    'smite 2','wobbly life','enshrouded','satisfactory','lovers spacetime',
    'factorio','escape simulator','sker ritual','harold halibut','kerbal space program'
];

searchInput.addEventListener('input', function() {
    const input = this.value.toLowerCase(); //to read games array
    let suggestions = [];

    if (input.length > 0) {
        suggestions = games.filter(function(game) {
            return game.toLowerCase().startsWith(input);
        });
    }

    displaySuggestions(suggestions);
});

function displaySuggestions(suggestions) {
    const html = suggestions.map(function(suggestion) {
        return `<a style='text-transform: capitalize;' href="/gameAbout/${suggestion}.html"><div>${suggestion}</div></a> `;
    }).join('');
    
    autocompleteResults.innerHTML = html;
}

document.addEventListener('click', function(e) {
    if (!autocompleteResults.contains(e.target)) {
        autocompleteResults.innerHTML = '';
    }
});

