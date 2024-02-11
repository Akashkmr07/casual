const yesBtn = document.getElementById('btn-yes');
const noBtn = document.getElementById('btn-no');

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

yesBtn.addEventListener('touchstart', yes);
yesBtn.addEventListener('click', yes);

noBtn.addEventListener('touchstart', no);
noBtn.addEventListener('click', no);

const buttonRect = noBtn.getBoundingClientRect();

const buttonX = buttonRect.left;
const buttonY = buttonRect.top;


function no() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;


    noBtn.style.transform = `translateY(-${buttonY}px)`;

    // const randX = Math.floor(Math.random() * (deviceWidth/5));
    const randY = Math.floor(Math.random() * (deviceHeight / 5));

    noBtn.style.transform = `translateY(${randY}px)`;
}

function yes() {
    const gif = document.getElementById('gif');
    const text = document.getElementById('text');

    gif.src = './assets/kissing-bear.gif';
    text.innerHTML = 'I knew you would say yes!';

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
}