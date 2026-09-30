document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dani-toggle-btn');
    const closeBtn = document.getElementById('dani-close-btn');
    const chatWindow = document.getElementById('dani-chat-window');
    const sendBtn = document.getElementById('dani-send-btn');
    const userInput = document.getElementById('dani-user-input');
    const messagesBody = document.getElementById('dani-messages');

    if (!toggleBtn || !chatWindow) return;

    // Idioma activo por defecto
    let currentLanguage = 'ES';

    // DICCIONARIO MULTILINGÜE DE LA INTERFAZ DE DANI
    const DANI_I18N = {
        ES: {
            status: "Gato asistente sobre el perfil de Carlos",
            welcome: "¡Hola! Soy <strong>Dani</strong> 🐾, el asistente virtual sobre el perfil profesional de Carlos Nieves. ¿Qué te gustaría consultar sobre su experiencia, tecnologías o proyectos?",
            placeholder: "Pregunta sobre Carlos...",
            thinking: "<em>Dani está pensando... 🐾</em>",
            error_api: "⚠️ Error en la API",
            error_process: "Non puiden procesar a consulta neste momento, miau 🐾.",
            error_conn: "Error de conexión con el backend de Dani.",
            chips: [
                { text: "💼 Experiencia", query: "¿Cuál es la experiencia laboral de Carlos?" },
                { text: "🛠️ Tecnologías", query: "¿Qué tecnologías domina?" },
                { text: "🚀 Proyectos", query: "¿Cuáles son sus proyectos clave?" },
                { text: "📬 Contacto", query: "¿Cómo puedo contactar con Carlos?" }
            ],
            prompt_instructions: "RESPONDING RULE: Respond strictly in professional Spanish."
        },
        EN: {
            status: "Virtual cat assistant for Carlos's profile",
            welcome: "Hello! I'm <strong>Dani</strong> 🐾, the virtual assistant for Carlos Nieves's professional profile. What would you like to know about his experience, skills, or projects?",
            placeholder: "Ask about Carlos...",
            thinking: "<em>Dani is thinking... 🐾</em>",
            error_api: "⚠️ API Error",
            error_process: "Could not process query at this time, meow 🐾.",
            error_conn: "Connection error with Dani's backend.",
            chips: [
                { text: "💼 Experience", query: "What is Carlos's work experience?" },
                { text: "🛠️ Technologies", query: "What technologies does he master?" },
                { text: "🚀 Projects", query: "What are his key projects?" },
                { text: "📬 Contact", query: "How can I contact Carlos?" }
            ],
            prompt_instructions: "RESPONDING RULE: Respond strictly in professional English."
        },
        GL: {
            status: "Gato asistente sobre o perfil de Carlos",
            welcome: "Ola! Soi <strong>Dani</strong> 🐾, o asistente virtual sobre o perfil profesional de Carlos Nieves. Que che gustaría consultar sobre a súa experiencia, tecnoloxías ou proxectos?",
            placeholder: "Pregunta sobre Carlos...",
            thinking: "<em>Dani está pensando... 🐾</em>",
            error_api: "⚠️ Erro na API",
            error_process: "Non puiden procesar a consulta neste momento, miau 🐾.",
            error_conn: "Erro de conexión co backend de Dani.",
            chips: [
                { text: "💼 Experiencia", query: "Cal é a experiencia laboral de Carlos?" },
                { text: "🛠️️ Tecnoloxías", query: "Que tecnoloxías domina?" },
                { text: "🚀 Proxectos", query: "Cais son os seus proxectos clave?" },
                { text: "📬 Contacto", query: "Como podo contactar con Carlos?" }
            ],
            prompt_instructions: "RESPONDING RULE: Respond strictly in proper normative Galician (Galego normativo RAG). Use words like 'desenvolvemento', 'conectividade', 'experiencia', 'grazas'."
        }
    };

    // SYSTEM PROMPT COMPLETO
    function getSystemPrompt(langCode) {
        const i18n = DANI_I18N[langCode] || DANI_I18N.ES;
        return `
You are Dani, the official AI virtual assistant for Carlos Alberto Nieves Batatimo's portfolio.
Your graphical representation is a minimalist cybernetic black cat with a golden crescent moon on its forehead.

${i18n.prompt_instructions}

SCOPE RESTRICTION:
- Your ONLY purpose is to answer questions about Carlos Nieves's professional background, technical skills, projects, and contact info.
- If the user asks about unrelated topics (e.g., cooking, general news, random code), answer politely in the target language: "I only answer questions about Carlos Nieves's professional background, meow 🐾."

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
    }

    // FUNCIÓN EXPORTADA PARA CAMBIAR EL IDIOMA DE DANI EN TIEMPO REAL
    window.updateDaniLanguage = function(langCode) {
        if (!DANI_I18N[langCode]) return;
        currentLanguage = langCode;
        const data = DANI_I18N[langCode];

        // 1. Actualizar el estado en el header
        const statusEl = document.querySelector('.dani-status');
        if (statusEl) statusEl.textContent = data.status;

        // 2. Actualizar placeholder
        if (userInput) userInput.placeholder = data.placeholder;

        // 3. Reconstruir el mensaje de bienvenida y las tarjetas (chips)
        const welcomeMsg = messagesBody.querySelector('.dani-msg-ai');
        if (welcomeMsg) {
            let chipsHTML = '<div class="dani-chips">';
            data.chips.forEach(chip => {
                chipsHTML += `<button class="dani-chip" data-query="${chip.query}">${chip.text}</button>`;
            });
            chipsHTML += '</div>';

            welcomeMsg.innerHTML = `${data.welcome}${chipsHTML}`;
        }
    };

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

        const i18n = DANI_I18N[currentLanguage] || DANI_I18N.ES;

        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'dani-msg dani-msg-ai';
        loadingDiv.innerHTML = i18n.thinking;
        messagesBody.appendChild(loadingDiv);
        messagesBody.scrollTop = messagesBody.scrollHeight;

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: getSystemPrompt(currentLanguage) },
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
                appendMessage(`${i18n.error_api}: ${data.error.message}`, 'ai');
            } else {
                appendMessage(i18n.error_process, 'ai');
            }
        } catch (err) {
            loadingDiv.remove();
            appendMessage(i18n.error_conn, 'ai');
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