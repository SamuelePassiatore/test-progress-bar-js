// Recupero elementi in pagina
const message = document.getElementById('message');
const progressBar = document.getElementById('progress-bar');
const button = document.getElementById('upload');
const progressValue = document.querySelector('.progress-value');
const progressText = document.querySelector('.progress-text');

// Event listener sul bottone
button.addEventListener('click', () => {
  // Faccio sparire il messaggio di upload
  message.classList.remove('hidden');
  progressBar.classList.remove('hidden');

  // ! Blocco il bottone
  button.disabled = true;

  // Cambio testo bottone
  button.innerText = 'Uplaoading...';

  // Preparo il value
  let progress = 0;

  //   Funzione set interval
  const interval = setInterval(() => {
    console.log('eseguo');
    if (progress === 100) {
      clearInterval(interval);
      message.classList.remove('hidden');
      progressBar.classList.add('hidden');
      button.innerText = 'Uplaoad new';
      button.disabled = false;

      const percentageString = '0%';
      progressText.innerText = percentageString;
      progressValue.style.width = percentageString;

    } else {
      const percentageString = ++progress + '%';
      progressText.innerText = percentageString;
      progressValue.style.width = percentageString;
    }
  }, 200);
});