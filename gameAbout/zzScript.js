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


