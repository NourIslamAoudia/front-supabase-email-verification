document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://supabase-email-verification.vercel.app/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email,
                password
            }
        });

        // Axios automatically throws an error for non-2xx responses
        document.getElementById('responseMessage').textContent = response.data;
        document.getElementById('responseMessage').style.color = '#28a745'; // Vert pour le succès
        
    } catch (error) {
        const errorMessage = error.response?.data || 'Erreur lors de la connexion';
        document.getElementById('responseMessage').textContent = errorMessage;
        document.getElementById('responseMessage').style.color = '#dc3545'; // Rouge pour les erreurs
        console.error('Erreur:', error);
    }
});