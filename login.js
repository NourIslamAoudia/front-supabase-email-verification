document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://supabase-email-verification.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.text();

        if (response.ok) {
            document.getElementById('responseMessage').textContent = result;
            document.getElementById('responseMessage').style.color = '#28a745'; // Vert pour le succès
        } else {
            document.getElementById('responseMessage').textContent = result;
            document.getElementById('responseMessage').style.color = '#dc3545'; // Rouge pour les erreurs
        }
    } catch (error) {
        document.getElementById('responseMessage').textContent = 'Erreur lors de la connexion';
        document.getElementById('responseMessage').style.color = '#dc3545'; // Rouge pour les erreurs
        console.error('Erreur:', error);
    }
});