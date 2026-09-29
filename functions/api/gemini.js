export async function onRequestPost(context) {
    // Lee la clave de API (acepta tanto GROQ_API_KEY como GEMINI_API_KEY)
    const apiKey = context.env.GROQ_API_KEY || context.env.GEMINI_API_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ 
            error: { message: "GROQ_API_KEY no configurada en las variables de Cloudflare." } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const body = await context.request.json();
        
        // Extrae el contexto y prompt original enviado desde dani-ai.js
        const promptText = body.contents?.[0]?.parts?.map(p => p.text).join("\n\n") || "";

        // Petición al motor de inferencia ultra rápido de Groq (Llama 3.3 70B)
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "user", content: promptText }
                ],
                temperature: 0.2,
                max_tokens: 600
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return new Response(JSON.stringify({ 
                error: { message: data.error?.message || "Error en el servidor de Groq" } 
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Formatea la respuesta de Groq para mantener compatibilidad con dani-ai.js
        const formattedData = {
            candidates: [
                {
                    content: {
                        parts: [
                            { text: data.choices?.[0]?.message?.content || "No se obtuvo respuesta." }
                        ]
                    }
                }
            ]
        };

        return new Response(JSON.stringify(formattedData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        return new Response(JSON.stringify({ 
            error: { message: `Error en Cloudflare Function: ${err.message}` } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}