export async function onRequestPost(context) {
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ 
            error: { message: "GEMINI_API_KEY no encontrada en las variables de entorno de Cloudflare." } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const body = await context.request.json();
        
        // Lista de endpoints a probar secuencialmente
        const endpoints = [
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`
        ];

        let lastData = null;
        let lastStatus = 500;

        for (const url of endpoints) {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            
            // Si la respuesta es exitosa y contiene candidatos, devolverla inmediatamente
            if (response.ok && data.candidates) {
                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            lastData = data;
            lastStatus = response.status;
        }

        // Si ninguno funcionó, devolver el último error recibido
        return new Response(JSON.stringify(lastData), {
            status: lastStatus,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        return new Response(JSON.stringify({ 
            error: { message: `Error interno en Cloudflare Function: ${err.message}` } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}