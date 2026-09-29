export async function onRequestPost(context) {
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ 
            error: { message: "GEMINI_API_KEY no configurada en Cloudflare." } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const body = await context.request.json();

        // 1. Consultar la lista de modelos disponibles para tu clave
        const listModelsUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const modelsResponse = await fetch(listModelsUrl);
        const modelsData = await modelsResponse.json();

        let targetModel = null;

        if (modelsData.models && Array.isArray(modelsData.models)) {
            // Buscar un modelo activo que contenga 'flash' y soporte 'generateContent'
            const flashModel = modelsData.models.find(m => 
                m.name.includes('flash') && 
                m.supportedGenerationMethods && 
                m.supportedGenerationMethods.includes('generateContent')
            );
            if (flashModel) {
                targetModel = flashModel.name; // Ej: 'models/gemini-1.5-flash' o 'models/gemini-2.0-flash'
            }
        }

        // Si no detecta ninguno en la lista, usa el valor solicitado por la API
        if (!targetModel) {
            targetModel = 'models/gemini-1.5-flash';
        }

        // 2. Ejecutar la petición al modelo detectado
        const generateUrl = `https://generativelanguage.googleapis.com/v1beta/${targetModel}:generateContent?key=${apiKey}`;

        const response = await fetch(generateUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
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