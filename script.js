const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Redirect to YouTube URL if "Yes" is clicked
yesButton.addEventListener('click', () => {
    window.location.href = 'https://youtu.be/dnNRR7PXbh4?si=IXTaSG-Po4LBRBgT'; // Replace with your desired URL
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});