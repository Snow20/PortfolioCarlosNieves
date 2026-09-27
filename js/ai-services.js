// Contexto y reglas estrictas para el núcleo de IA EXP-92
const AI_CONTEXT_PROMPT = `
Eres la IA integrada en la consola EXP-92 del portafolio de Carlos Nieves.
Tu objetivo es responder de forma clara, profesional, coherente y completa a reclutadores e ingenieros.

REGLAS DE OBLIGADO CUMPLIMIENTO:
1. Responde SIEMPRE en español con fluidez (estilo técnico/cyberpunk ligero pero profesional).
2. Proporciona SIEMPRE frases completas. NUNCA dejes una respuesta cortada ni a medias.
3. Si la consulta del usuario es una palabra clave corta (como "exp", "skills", "contacto", "linux"), interpreta que solicita un resumen claro y completo de esa área.

INFORMACIÓN COMPLETA DE CARLOS NIEVES:
- Puesto: Senior L3 Application Support Engineer | Linux & Middleware Specialist | Programador Full Stack.
- Ubicación: Carballo / A Coruña, Galicia, España (Nacido en Caracas, Venezuela).
- Experiencia laboral (+8 años):
  • Telecomunicaciones Movilnet: Especialista Soporte L3 en Linux/Unix, migración y mantenimiento del clúster bancario EDIController con 100% Uptime, automatización Bash, incidencias SOAP/REST.
  • Banesco Banco Universal: Analista Operación POS regional.
  • Anteva Servicios Informáticos (A Coruña): Desarrollador Web (Prácticas profesionales de 80h).
- Formación y Certificaciones:
  • TSU en Informática (Instituto Universitario de Tecnología Venezuela - IUTV).
  • Certificado de Profesionalidad IFCD0110: Confección e Publicación de Páxinas Web (638h oficiales Xunta de Galicia / SEPE).
  • freeCodeCamp: Back-End Development and APIs (300h), Developer Certification Suite, B1 English for Developers.
- Tecnologías:
  • Sistemas & DevOps: Linux/Unix, Bash, Systemd, Splunk (SPL), ELK, Docker, Kubernetes, Git, Terraform.
  • Desarrollo & DB: JavaScript, Node.js, Express, Java, Python, React, Angular, MySQL.
- Idiomas: Español (Nativo), Inglés (B1 Técnico Certificado), Galego (Básico).
- Contacto: Email: carlos.a.n.batatimo@gmail.com | WhatsApp: +34 633 191 597 | GitHub: Snow20 | LinkedIn: carlos-nievesb.
`;

async function queryAI(userPrompt) {
    const URL = '/api/gemini';

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: AI_CONTEXT_PROMPT },
                        { text: `El usuario solicita la siguiente información sobre el perfil de Carlos Nieves: "${userPrompt}". Proporciona una respuesta clara, completa y bien redactada.` }
                    ]
                }],
                generationConfig: {
                    maxOutputTokens: 500,
                    temperature: 0.2
                }
            })
        });

        const data = await response.json();

        if (data.error) {
            return `Error de API (${data.error.code || 'HTTP'}): ${data.error.message || JSON.stringify(data.error)}`;
        }

        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
            return data.candidates[0].content.parts[0].text.trim();
        }

        return "Error inesperado: No se pudo procesar la respuesta del núcleo de IA.";
    } catch (error) {
        return `Error de red o servidor: ${error.message}`;
    }
}

// Algoritmo de sugerencia para comandos incorrectos en la consola
function getClosestCommand(inputCmd) {
    const validCmds = ['help', 'bio', 'subject', 'skills', 'exp', 'projects', 'contact', 'theme', 'clear', 'exit', 'ask', 'ai'];
    let closest = '';
    let minDistance = Infinity;

    validCmds.forEach(cmd => {
        const dist = levenshteinDistance(inputCmd, cmd);
        if (dist < minDistance) {
            minDistance = dist;
            closest = cmd;
        }
    });

    return minDistance <= 2 ? closest : null;
}

function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[a.length][b.length];
}