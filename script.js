'use strict';


//Selecting elements
const popup = document.querySelector('.pop-up');
const btnOpenPop = document.querySelector('.share-btn');
const btnClosePop = document.querySelector('.close-popup');
// const btnClosePopUp = document.querySelector('.share-btn');

//This function opens the popup
const openPopUp = function () {
    popup.classList.toggle('hidden');
    console.log('this worked');
};


// This is what causes the popup to open
btnOpenPop.addEventListener('click', openPopUp);

// This closes the popup when the user clicks outside button
// const closePopUp = function () {
//     console.log('did you click');
//     popup.classList.add('hidden');

// };

// This what causes the popup to close
// btnClosePop.addEventListener('click', closePopUp);


// btnClosePopUp.addEventListener('click', closePopUp);

// btnOpenPop.addEventListener('click', closePopUp);

// btnOpen.addEventListener('click', openPopUp);
// btnClose.addEventListener('click', closePopUp);


/*let display = document.getElementById('.pop-up').style.display;*/

/*document.querySelector('.pop-up').addEventListener('click', function () {

    if('click(popup)')
    document.getElementById('.pop-up').style.display = 'flex';

    console.log('has been clicked');

});*/
/*var button = false;
function popup() {
    button = !button;
    var popup = document.getElementById('.popup');
    popup.style.display = (button = true) ? 'flex' : 'none';


    console.log('has been clicked');
}*/

/*let popup = document.getElementById('.pop-up');

popup.addEventListener('click', function(popup) {
   let popup =  popup.style.display('flex');
});*/
