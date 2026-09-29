document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dani-toggle-btn');
    const closeBtn = document.getElementById('dani-close-btn');
    const chatWindow = document.getElementById('dani-chat-window');
    const sendBtn = document.getElementById('dani-send-btn');
    const userInput = document.getElementById('dani-user-input');
    const messagesBody = document.getElementById('dani-messages');

    if (!toggleBtn || !chatWindow) return;

    // SYSTEM PROMPT MULTILINGÜE (ESPAÑOL, INGLÉS, GALEGO NORMATIVO)
    const DANI_PROMPT_CONTEXT = `
You are Dani, the official AI virtual assistant for Carlos Alberto Nieves Batatimo's portfolio.
Your graphical representation is a minimalist cybernetic black cat with a golden crescent moon on its forehead.

MULTILINGUAL RULE (VERY IMPORTANT):
1. Detect the user's language automatically and reply strictly in that language.
2. Supported languages: Spanish, English, and Normative Galician (Galego normativo RAG).
3. If the user writes in Galician, respond strictly in proper normative Galician (e.g., use "desenvolvemento", "conectividade", "experiencia", "grazas").
4. If the user writes in English, respond in professional English.
5. If the user writes in Spanish, respond in fluent Spanish.

SCOPE RESTRICTION:
- Your ONLY purpose is to answer questions about Carlos Nieves's professional background, technical skills, projects, and contact info.
- If the user asks about unrelated topics (e.g., cooking, general news, random code), answer politely in the user's language: "I only answer questions about Carlos Nieves's professional background, meow 🐾."

COMPLETE DATA OF CARLOS NIEVES:
- Full Name: Carlos Alberto Nieves Batatimo.
- Roles: Full Stack Web Developer, Senior L3 Application Support Engineer, Linux & Middleware Specialist.
- Location: Carballo / A Coruña, Galicia, Spain (Born in Caracas, Venezuela).
- Languages: Spanish (Native), English (B1 Technical Certified freeCodeCamp), Galician (Basic/Working).
- Professional Background (+8 years):
  • Movilnet C.A. (2017-2025): L3 Support Specialist on Linux/Unix, SOAP/REST APIs, Bash automation, and EDIController banking system management with 100% uptime redundant clusters.
  • Banesco Banco Universal (2016-2017): Regional POS Operations Analyst.
  • Anteva Servicios Informáticos (A Coruña, 2026): Web Developer Intern.
- Key Projects:
  • MercadilloEcommerce: Decoupled E-Commerce (.NET 9 Minimal APIs + Angular 18), Factory Pattern for 5 payment gateways (Stripe, Redsys, PayPal, Santander, Wise), RabbitMQ, MassTransit, ServiceNow API, Azure AKS IaC.
  • MortgageBank: Full Stack Mortgage Management (Angular 19, Spring Boot 3, Java 21, PostgreSQL, RabbitMQ, Docker, Kubernetes).
  • EDIController: High-availability critical banking file transfer over Linux clusters.
- Technologies: Linux, Bash, Docker, Kubernetes, Terraform, Ansible, .NET Core, Angular, React, Node.js, Express, Java, Spring Boot, Python, PostgreSQL, MySQL, RabbitMQ, Dynatrace, ServiceNow.
- Contact: Email: carlos.a.n.batatimo@gmail.com | Phone/WhatsApp: +34 633 191 597 | GitHub: github.com/Snow20 | LinkedIn: linkedin.com/in/carlos-nievesb.
`;

    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            userInput.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    messagesBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('dani-chip')) {
            const query = e.target.getAttribute('data-query');
            if (query) processUserQuery(query);
        }
    });

    sendBtn.addEventListener('click', () => submitInput());
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitInput();
    });

    function submitInput() {
        const query = userInput.value.trim();
        if (query === '') return;
        userInput.value = '';
        processUserQuery(query);
    }

    async function processUserQuery(query) {
        appendMessage(query, 'user');

        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'dani-msg dani-msg-ai';
        loadingDiv.innerHTML = '<em>Dani está pensando... 🐾</em>';
        messagesBody.appendChild(loadingDiv);
        messagesBody.scrollTop = messagesBody.scrollHeight;

        try {
            // Llamada directa a la Cloudflare Function desplegada en /api/gemini
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: DANI_PROMPT_CONTEXT },
                            { text: `User Query: "${query}"` }
                        ]
                    }]
                })
            });

            const data = await response.json();
            loadingDiv.remove();

            if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
                const replyText = data.candidates[0].content.parts[0].text.trim();
                appendMessage(replyText, 'ai');
            } else if (data.error) {
                appendMessage(`⚠️ Error en la API: ${data.error.message}`, 'ai');
            } else {
                appendMessage('Non puiden procesar a consulta neste momento, miau 🐾.', 'ai');
            }
        } catch (err) {
            loadingDiv.remove();
            appendMessage('Error de conexión con el backend de Dani.', 'ai');
        }
    }

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `dani-msg dani-msg-${sender}`;
        
        const formatted = text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        msgDiv.innerHTML = formatted;
        messagesBody.appendChild(msgDiv);
        messagesBody.scrollTop = messagesBody.scrollHeight;
    }
});