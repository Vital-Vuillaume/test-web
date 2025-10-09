
  const btn = document.getElementById('btn');
  const resultat = document.getElementById('resultat');

    btn.addEventListener('click', () => {
  fetch('https://concept-pie-criteria-eden.trycloudflare.com/exemple')
    .then(r => r.text())
    .then(t => resultat.textContent = t)
    .catch(e => resultat.textContent = 'Erreur : ' + e.message);
    });