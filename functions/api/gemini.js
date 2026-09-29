export async function onRequestPost(context) {
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
        const promptText = body.contents?.[0]?.parts?.map(p => p.text).join("\n\n") || "";

        // Lista de modelos activos en Groq para reintentar automáticamente
        const groqModels = [
            "llama-3.3-70b-versatile",
            "llama3-70b-8192",
            "llama3-8b-8192",
            "mixtral-8x7b-32768"
        ];

        let lastError = null;

        for (const model of groqModels) {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: model,
                    messages: [{ role: "user", content: promptText }],
                    temperature: 0.2,
                    max_tokens: 600
                })
            });

            const data = await response.json();

            if (response.ok && data.choices?.[0]?.message?.content) {
                // Formato compatible con dani-ai.js y ai-services.js
                return new Response(JSON.stringify({
                    candidates: [{
                        content: {
                            parts: [{ text: data.choices[0].message.content }]
                        }
                    }]
                }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            lastError = data.error?.message || `Error con modelo ${model}`;
        }

        return new Response(JSON.stringify({ 
            error: { message: lastError } 
        }), {
            status: 400,
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