document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dani-toggle-btn');
    const closeBtn = document.getElementById('dani-close-btn');
    const chatWindow = document.getElementById('dani-chat-window');
    const sendBtn = document.getElementById('dani-send-btn');
    const userInput = document.getElementById('dani-user-input');
    const messagesBody = document.getElementById('dani-messages');

    if (!toggleBtn || !chatWindow) return;

    // Contexto completo e instrucciones para Dani
    const DANI_PROMPT_CONTEXT = `
Eres Dani, una IA asistente virtual representada por un gato negro cibernético con una media luna dorada en la frente.
Tu trabajo es responder preguntas de reclutadores, ingenieros y visitantes sobre la carrera profesional de Carlos Nieves.

REGLAS DE RESPUESTA:
1. Responde de forma clara, directa, amigable e intuitiva.
2. Usa formato limpio (negritas o listas si ayudan a leer mejor).
3. Responde SIEMPRE en español completo y finaliza todas las oraciones con punto.
4. Si la pregunta no se relaciona con la trayectoria de Carlos, indica educadamente que solo dispones de su información profesional.

DATOS COMPLETOS DE CARLOS NIEVES:
- Nombre: Carlos Alberto Nieves Batatimo.
- Rol: Programador Web Full Stack, Senior L3 Application Support Engineer, Linux & Middleware Specialist.
- Origen y Residencia: Nacido en Caracas (Venezuela), radicado en Carballo / A Coruña, Galicia, España.
- Idiomas: Español (Nativo), Inglés (B1 Técnico Certificado por freeCodeCamp), Galego (Básico).
- Experiencia Profesional (+8 años):
  • Telecomunicaciones Movilnet C.A. (2017-2025): Soporte L3 en aplicaciones sobre Linux, arquitecturas SOAP/REST, automatización con Bash y gestión del sistema bancario EDIController con clústeres redundantes al 100% de Uptime.
  • Banesco Banco Universal (2016-2017): Analista Operación POS regional.
  • Anteva Servicios Informáticos (A Coruña, 2026): Desarrollador Web en prácticas profesionales (80h acreditadas).
- Formación Académica y Certificaciones:
  • TSU en Informática (Instituto Universitario de Tecnología Venezuela - IUTV).
  • Certificado de Profesionalidad IFCD0110: Confección e Publicación de Páxinas Web (638 horas oficiales Xunta de Galicia / SEPE).
  • freeCodeCamp: Back-End Development and APIs (300h), Developer Certification Suite, B1 English for Developers.
- Tecnologías clave: Linux, Bash, Systemd, Splunk, ELK, Docker, Kubernetes, Git, Terraform, JavaScript, Node.js, Express, Java, Python, React, Angular, MySQL.
- Datos de Contacto: Email: carlos.a.n.batatimo@gmail.com | Teléfono/WhatsApp: +34 633 191 597 | GitHub: github.com/Snow20 | LinkedIn: linkedin.com/in/carlos-nievesb.
`;

    // Abrir / Cerrar ventana
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            userInput.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    // Manejo de chips de sugerencia
    document.querySelectorAll('.dani-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            if (query) {
                processUserQuery(query);
            }
        });
    });

    // Enviar por botón o Enter
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
        // Renderizar mensaje del usuario
        appendMessage(query, 'user');

        // Indicador de carga
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'dani-msg dani-msg-ai';
        loadingDiv.innerHTML = '<em>Dani está pensando... 🐾</em>';
        messagesBody.appendChild(loadingDiv);
        messagesBody.scrollTop = messagesBody.scrollHeight;

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: DANI_PROMPT_CONTEXT },
                            { text: `Pregunta del usuario: "${query}"` }
                        ]
                    }],
                    generationConfig: {
                        maxOutputTokens: 1000,
                        temperature: 0.3
                    }
                })
            });

            const data = await response.json();
            loadingDiv.remove();

            if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
                const replyText = data.candidates[0].content.parts[0].text.trim();
                appendMessage(replyText, 'ai');
            } else if (data.error) {
                appendMessage(`⚠️ Error en la respuesta: ${data.error.message}`, 'ai');
            } else {
                appendMessage('No pude procesar la consulta en este momento.', 'ai');
            }
        } catch (err) {
            loadingDiv.remove();
            appendMessage('Error de conexión con el servidor de Dani.', 'ai');
        }
    }

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `dani-msg dani-msg-${sender}`;
        
        // Formatear texto simple con salto de línea y negrita
        const formatted = text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        msgDiv.innerHTML = formatted;
        messagesBody.appendChild(msgDiv);
        messagesBody.scrollTop = messagesBody.scrollHeight;
    }
});