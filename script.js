let drugs = 0;

const drugCount = document.getElementById('drug-count');
const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', () => {
  drugs++;
  drugCount.textContent = drugs;
});
