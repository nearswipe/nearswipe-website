import sendMail from "@/lib/sendMail";

export async function POST(req) {
  try {
    const { email, name, reason } = await req.json(); // Read the request body

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
      merge_fields: { FNAME: name, REASON: reason },
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

    const unsubscribeLink = `https://nearswipe.io/api/unsubscribe?email=${encodeURIComponent(
      email
    )}`;

    // Send email to the subscriber
    await sendMail({
      email,
      subject: "Welcome to NearSwipe!",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to NearSwipe</title>
        <img src="https://nearswipe.com/favicon.ico" alt="NearSwipe Logo" width="32" height="32">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
          }
          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #000000;
            background-color: #ffffff;
          }
          .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #000000;
          }
          .header h1 {
            font-size: 24px;
            margin: 0;
            color: #000000;
          }
          .body {
            padding: 20px 0;
            text-align: center;
          }
          .body p {
            margin: 10px 0;
            line-height: 1.6;
          }
          .footer {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #000000;
            font-size: 12px;
            color: #666666;
          }
          .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #000000;
            color: white;
            text-decoration: none;
            font-size: 14px;
            border-radius: 5px;
          }
          .cta-button:hover {
            background-color: #333333;
          }
          .unsubscribe {
            margin-top: 20px;
            font-size: 14px;
            text-align: center;
          }
          .unsubscribe a {
            color: #000000;
            text-decoration: underline;
          }
          .unsubscribe a:hover {
            color: #333333;
          }
          .text {
            color: white;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Welcome to NearSwipe</h1>
          </div>
          <div class="body">
            <p>Thank you, <strong>${name}</strong>, for joining us as we build the future of seamless campus life.</p>
            <p>You’re now part of an exclusive group witnessing the revolution of how students <strong>access, pay, and thrive</strong>.</p>
            <p>Our vision is simple: <strong>one card, infinite possibilities.</strong></p>
            <p>We can’t wait to show you what’s next. Stay tuned; the wait is worth it.</p>
            <a href="mailto:team@nearswipe.io" class="cta-button"><span class="text">Explore the Vision</span></a>
          </div>
          <div class="footer">
            <p class="unsubscribe">No longer interested? <a href="${unsubscribeLink}">Unsubscribe here</a>.</p>
            <p>&copy; 2024 NearSwipe. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
      `,
    });

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
