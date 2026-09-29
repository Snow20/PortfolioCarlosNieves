// Contexto y reglas para el núcleo de IA EXP-92
const AI_CONTEXT_PROMPT = `
Eres la IA integrada en la consola EXP-92 del portafolio de Carlos Nieves.
Tu objetivo es responder de forma clara, profesional, coherente y COMPLETA a reclutadores e ingenieros.

REGLAS DE OBLIGADO CUMPLIMIENTO:
1. Responde SIEMPRE en español con fluidez.
2. Proporciona SIEMPRE frases completas que finalicen con punto. NUNCA dejes una palabra o frase a medias.
3. Si la consulta del usuario es una palabra clave corta ("exp", "bio", "skills", "contacto"), proporciona un resumen completo y bien redactado de esa área.

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
const URL = "/api/gemini";

try {
    const input = `

${AI_CONTEXT_PROMPT}

CONSULTA DEL USUARIO:
"${userPrompt}"

INSTRUCCIONES FINALES:

Responde en español.
Sé claro, profesional y completo.
No inventes información sobre Carlos.
Si la consulta es una palabra clave corta como "exp", "bio", "skills" o "contacto", proporciona un resumen útil del área correspondiente.

Finaliza siempre la respuesta con una frase completa.
`;

  const response = await fetch(URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          input
      })
  });

  const data = await response.json();

  if (!response.ok || data.error) {
      return `Error de API (${data.error?.code || response.status}): ${
          data.error?.message || "Error desconocido."
      }`;
  }

  if (data.output_text) {
      return data.output_text.trim();
  }

  // Compatibilidad adicional por si Google devuelve los pasos
  // pero no la propiedad output_text.
  if (Array.isArray(data.steps)) {
      const modelOutput = data.steps.find(
          step => step.type === "model_output"
      );

      if (modelOutput?.content) {
          const textContent = modelOutput.content
              .filter(item => item.type === "text")
              .map(item => item.text)
              .join("");

          if (textContent) {
              return textContent.trim();
          }
      }
  }

  return "Error inesperado: Gemini no devolvió contenido de texto.";

} catch (error) {
return Error de red o servidor: ${error.message};
}
}