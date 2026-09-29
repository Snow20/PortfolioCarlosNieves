export async function onRequestPost(context) {
const apiKey = context.env.GEMINI_API_KEY;

if (!apiKey) {
    return new Response(
        JSON.stringify({
            error: {
                message:
                    "GEMINI_API_KEY no está configurada en las variables de entorno de Cloudflare."
            }
        }),
        {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}

try {
    const body = await context.request.json();

    const userInput = body.input;

    if (!userInput || typeof userInput !== "string") {
        return new Response(
            JSON.stringify({
                error: {
                    message: "La petición debe contener un campo 'input' de texto."
                }
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    const googleUrl =
        "https://generativelanguage.googleapis.com/v1beta/interactions";

    const requestBody = {
        model: "gemini-3.8-flash",
        input: userInput,
        generation_config: {
            thinking_level: "low",
            max_output_tokens: 1200,
            temperature: 0.3
        }
    };

    const response = await fetch(googleUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey
        },
        body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    if (!response.ok) {
        return new Response(
            JSON.stringify({
                error: {
                    message:
                        data?.error?.message ||
                        "Google Gemini devolvió un error.",
                    code: data?.error?.code || response.status,
                    status: data?.error?.status || response.status
                }
            }),
            {
                status: response.status,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
} catch (error) {
    return new Response(
        JSON.stringify({
            error: {
                message:
                    error instanceof Error
                        ? error.message
                        : "Error desconocido en Cloudflare Function."
            }
        }),
        {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
}
