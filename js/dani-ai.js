async function processUserQuery(query) {
appendMessage(query, "user");

const loadingDiv = document.createElement("div");
loadingDiv.className = "dani-msg dani-msg-ai";
loadingDiv.innerHTML = "<em>Dani está pensando... 🐾</em>";

messagesBody.appendChild(loadingDiv);
messagesBody.scrollTop = messagesBody.scrollHeight;

try {
    const input = `

${DANI_PROMPT_CONTEXT}

USER QUERY:
"${query}"

IMPORTANT:

Detecta automáticamente el idioma de la consulta.
Responde exclusivamente en ese idioma.
Español → español.
English → professional English.
Galego → galego normativo.
Mantén las respuestas profesionales, naturales y claras.
Solo responde sobre Carlos Nieves, su experiencia, formación, tecnologías, proyectos y contacto.

Si la pregunta no está relacionada con Carlos Nieves, responde educadamente que Dani solo puede responder preguntas sobre su perfil profesional.
`;

  const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          input
      })
  });

  const data = await response.json();

  loadingDiv.remove();

  if (!response.ok) {
      const errorMessage =
          data?.error?.message ||
          `Error HTTP ${response.status}.`;

      appendMessage(
          `⚠️ Error en la API: ${errorMessage}`,
          "ai"
      );

      return;
  }

  if (data.error) {
      appendMessage(
          `⚠️ Error en la API: ${data.error.message}`,
          "ai"
      );

      return;
  }

  let replyText = "";

  // Respuesta normal de Interactions API.
  if (data.output_text) {
      replyText = data.output_text.trim();
  }

  // Fallback por si la respuesta viene dentro de steps.
  if (!replyText && Array.isArray(data.steps)) {
      const modelOutput = data.steps.find(
          step => step.type === "model_output"
      );

      if (modelOutput?.content) {
          replyText = modelOutput.content
              .filter(item => item.type === "text")
              .map(item => item.text)
              .join("")
              .trim();
      }
  }

  if (replyText) {
      appendMessage(replyText, "ai");
  } else {
      appendMessage(
          "No pude procesar la consulta en este momento, miau 🐾.",
          "ai"
      );
  }

} catch (err) {
loadingDiv.remove();

  appendMessage(
      `⚠️ Error de conexión con el backend de Dani: ${err.message}`,
      "ai"
  );

}
}