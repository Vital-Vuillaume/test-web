
  const btn = document.getElementById('btn');
  const resultat = document.getElementById('resultat');

    btn.addEventListener('click', () => {
      fetch(`https://unapproving-diana-heathless.ngrok-free.dev/exemple`)
        .then(response => response.text())
        .then(text => {
          resultat.textContent = text;
        })
        .catch(err => {
          resultat.textContent = 'Erreur : ' + err.message;
        });
    });