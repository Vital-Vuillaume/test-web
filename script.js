
  const btn = document.getElementById('btn');
  const resultat = document.getElementById('resultat');

  btn.addEventListener('click', async () => {
    try {
      const response = await fetch('https://unapproving-diana-heathless.ngrok-free.dev/exemple');
      const text = await response.text();
      resultat.textContent = text;
    } catch (err) {
      resultat.textContent = 'Erreur : ' + err.message;
    }
  });
