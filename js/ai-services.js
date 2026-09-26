// Prompt de contexto con la información de tu perfil profesional
const AI_CONTEXT_PROMPT = `
Eres la IA integrada en la consola EXP-92 del portafolio de Carlos Nieves.
Tu objetivo es responder preguntas breves de reclutadores e ingenieros sobre el perfil de Carlos.
Responde de forma concisa (máximo 3 frases), manteniendo un tono cyberpunk/técnico pero profesional.

INFORMACIÓN DE CARLOS NIEVES:
- Puesto: Senior L3 Application Support Engineer | Linux & Middleware Specialist.
- Experiencia: +8 años en soporte L3, Linux/Unix, Bash automation, arquitecturas SOAP/REST, clústeres de alta disponibilidad (EDIController 100% Uptime), Movilnet, Banesco.
- Educación y Certificaciones: TSU en Informática, Certificado de Profesionalidad en Confección y Publicación Web (SEPE/Xunta, 638h), freeCodeCamp Back-End Development and APIs (300h), freeCodeCamp Developer Certification Suite, B1 English.
- Tecnologías: Linux, Bash, Systemd, Splunk, ELK, Docker, Kubernetes, Git, Java, Python, JavaScript, Node.js, Express, MySQL.
- Ubicación: Carballo, A Coruña, Galicia, España.

Si te preguntan algo no relacionado con el perfil profesional o tecnológico de Carlos, responde amablemente que tu núcleo de datos solo procesa consultas sobre su trayectoria técnica.
`;

// Función para consultar a la API de Gemini
async function queryAI(userPrompt) {
    // Reemplaza con tu API Key de Google AI Studio (Gemini)
    const API_KEY = "TU_GEMINI_API_KEY"; 
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    if (!API_KEY || API_KEY === "TU_GEMINI_API_KEY") {
        return "⚠️ Error: API Key no configurada en js/ai-services.js.";
    }

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: AI_CONTEXT_PROMPT },
                        { text: `Pregunta del usuario: ${userPrompt}` }
                    ]
                }],
                generationConfig: {
                    maxOutputTokens: 200,
                    temperature: 0.4
                }
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "Error: Respuesta no procesada por el núcleo de IA.";
        }
    } catch (error) {
        return "Error de conexión con la red de datos neurales (API Error).";
    }
}

// Algoritmo de sugerencia para comandos incorrectos (ej: "skill" -> "skills")
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