export async function POST(req) {
  try {
    const { email, name } = await req.json(); // Read the request body

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_APIKEY;
    const DATACENTER = API_KEY.split("-")[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`;

    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: { FNAME: name },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await response.json();

    return new Response(
      JSON.stringify({ message: "Subscription successful", data: res }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
