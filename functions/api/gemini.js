export async function onRequestPost(context) {
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ 
            error: { message: "GEMINI_API_KEY no configurada en las variables de Cloudflare." } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const body = await context.request.json();

        // Lista de modelos a probar en orden de prioridad
        const candidateModels = [
            'gemini-1.5-flash-8b',
            'gemini-1.5-flash',
            'gemini-2.5-flash',
            'gemini-1.5-pro'
        ];

        let lastResponseData = null;
        let lastStatus = 500;

        for (const model of candidateModels) {
            const googleUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

            const response = await fetch(googleUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            // Si la respuesta es exitosa (200 OK) y trae candidatos, la devolvemos inmediatamente
            if (response.ok && data.candidates && data.candidates.length > 0) {
                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            lastResponseData = data;
            lastStatus = response.status;

            // Si el error NO es por sobrecarga (429 / High Demand) o modelo no encontrado (404), detenemos el bucle
            if (response.status !== 429 && response.status !== 404 && (!data.error || !data.error.message.includes('high demand'))) {
                break;
            }
        }

        // Si todos los modelos están saturados o fallan, se devuelve el último mensaje de error recibido
        return new Response(JSON.stringify(lastResponseData), {
            status: lastStatus,
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