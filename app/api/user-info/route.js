
import axios from "axios";

export async function GET(request) {
  try {
    const response = await axios.get("https://system.packnexa.com/api/user-info", {
      headers: {
        Authorization: `Bearer ${process.env.PACKNEXA_TOKEN}`, 
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("User info fetch failed:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ message: "User info fetch failed", error: error.message }),
      { status: error.response?.status || 500 }
    );
  }
}
