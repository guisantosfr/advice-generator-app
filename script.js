//renderiza nova citação no carregamento e na atualização
//e tambem no clique do botão

const button = document.querySelector('.advice__btn button');

const adviceID = document.querySelector('.advice__id');
const adviceText = document.querySelector('.advice__text');

const ADVICE_URL = 'https://api.adviceslip.com/advice';

function renderAdvice(advice) {
  adviceID.textContent = `Advice #${advice.id}`;
  adviceText.textContent = `"${advice.advice}"`;
}

function getAdvice() {
  fetch(ADVICE_URL)
    .then(data => data.json())
    .then(data => {
      renderAdvice(data.slip);
    })
    .catch(error => console.error(error));
}

button.addEventListener('click', e => {
  getAdvice();
});

window.addEventListener('load', e => {
  getAdvice();
})