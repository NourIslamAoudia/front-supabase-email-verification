document.getElementById('signupForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('https://supabase-email-verification.vercel.app/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
      });

      const result = await response.text();
      document.getElementById('responseMessage').textContent = result;
  } catch (error) {
      document.getElementById('responseMessage').textContent = 'Erreur lors de l\'inscription';
      console.error('Erreur:', error);
  }
});