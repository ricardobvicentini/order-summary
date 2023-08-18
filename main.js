document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});


const initApp = () => {
    const myBody = document.querySelector('.body');
    const myMain = document.querySelector('.main');
    const myContainer = document.querySelector('.container');
    const myImage = document.querySelector('.container__image');
    const myText = document.querySelector('.text__h1');
    const myBtn1 = document.querySelector('.btn-1');
    const myBtn2 = document.querySelector('.btn-2');
    const myAttr = document.querySelector('.attribution');
    const myIcon = document.querySelector('.icons');
    const mySun = document.querySelector('.icon-sun');
    const myMoon = document.querySelector('.icon-moon');

    myIcon.addEventListener('click', (event) => {
        myMoon.classList.toggle('icon-moon-hide');
        mySun.classList.toggle('icon-sun-show');
        myMain.classList.toggle('dark-main');
        myBody.classList.toggle('dark-body');
        myContainer.classList.toggle('dark-container');
        myImage.classList.toggle('container__image-dark');
        myText.classList.toggle('text__h1-dark');
        myBtn1.classList.toggle('btn-1-dark');
        myBtn2.classList.toggle('btn-2-dark', 'btn-2-dark:hover');
        myAttr.classList.toggle('attribution-dark');
    });
};