
  const btn = document.getElementById('btn');
  const resultat = document.getElementById('resultat');

    btn.addEventListener('click', () => {
btn.addEventListener('click', () => {
  fetch('https://unapproving-diana-heathless.ngrok-free.dev/proxy/exemple')
    .then(r => r.text())
    .then(t => resultat.textContent = t)
    .catch(e => resultat.textContent = 'Erreur : ' + e.message);
});
    });