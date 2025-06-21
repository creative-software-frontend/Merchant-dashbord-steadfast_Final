
export async function GET(req) {
  const token = process.env.PACKNEXA_TOKEN;

  if (!token) {
    return new Response(JSON.stringify({ error: "Missing token" }), {
      status: 500,
    });
  }

  try {
    const response = await fetch("https://system.packnexa.com/api/confirm-orders-list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const text = await response.text();

    try {
      const json = JSON.parse(text);
      return new Response(JSON.stringify(json), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("JSON parse error:", text);
      return new Response(JSON.stringify({ error: "Invalid JSON from upstream", html: text }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    console.error("API Fetch failed:", err);
    return new Response(JSON.stringify({ error: "API call failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
