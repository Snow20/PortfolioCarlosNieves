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
        
        // Endpoint actualizado para v1beta con gemini-2.5-flash
        const primaryUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        let response = await fetch(primaryUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        let data = await response.json();

        // Fallback automatico a gemini-2.0-flash si el modelo primario no responde
        if (response.status === 404 || (data.error && data.error.code === 404)) {
            const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            response = await fetch(fallbackUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            data = await response.json();
        }

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ 
            error: { message: `Error en la Cloudflare Function: ${err.message}` } 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}