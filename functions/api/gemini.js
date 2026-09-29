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

        // 1. Consultar la lista real de modelos activos en Groq para tu API Key
        const modelsResponse = await fetch("https://api.groq.com/openai/v1/models", {
            headers: { "Authorization": `Bearer ${apiKey}` }
        });
        const modelsData = await modelsResponse.json();

        if (!modelsResponse.ok || !modelsData.data || modelsData.data.length === 0) {
            return new Response(JSON.stringify({ 
                error: { message: modelsData.error?.message || "No se pudo obtener la lista de modelos de Groq." } 
            }), {
                status: modelsResponse.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Filtrar y seleccionar un modelo activo (prioriza llama-3.3, llama3 u otros activos)
        const activeModels = modelsData.data.map(m => m.id);
        const selectedModel = activeModels.find(id => id.includes("llama-3.3")) ||
                              activeModels.find(id => id.includes("llama-3.1")) ||
                              activeModels.find(id => id.includes("llama3")) ||
                              activeModels[0];

        // 3. Petición de inferencia al modelo detectado
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: selectedModel,
                messages: [{ role: "user", content: promptText }],
                temperature: 0.2,
                max_tokens: 600
            })
        });

        const data = await response.json();

        if (response.ok && data.choices?.[0]?.message?.content) {
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

        return new Response(JSON.stringify({ 
            error: { message: data.error?.message || `Error con el modelo ${selectedModel}` } 
        }), {
            status: response.status,
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