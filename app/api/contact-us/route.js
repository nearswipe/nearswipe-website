import sendMail from "@/lib/sendMail";

const adminEmail = "team@nearswipe.com";

export async function POST(req) {
  try {
    const { email, name, message } = await req.json(); // Read the request body

    if (!email || !name || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

   

    // Send email to the admin
    await sendMail({
      email: adminEmail,
      subject: "New Contact Message",
      html: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Contact Message</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                  }
                  .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  }
                  .header {
                    text-align: center;
                    border-bottom: 2px solid #4CAF50;
                    padding-bottom: 10px;
                  }
                  .header h2 {
                    color: #333333;
                  }
                  .content {
                    margin-top: 20px;
                  }
                  .content p {
                    font-size: 16px;
                    color: #555555;
                    line-height: 1.6;
                  }
                  .info {
                    margin-top: 20px;
                  }
                  .info-item {
                    margin-bottom: 10px;
                  }
                  .info-item span {
                    font-weight: bold;
                    color: #333333;
                  }
                  .footer {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 14px;
                    color: #888888;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>New Contact Message</h2>
                  </div>
                  <div class="content">
                    <p>You have received a new message from the NearSwipe contact form:</p>
                    <div class="info">
                      <div class="info-item">
                        <span>Name:</span> ${name}
                      </div>
                      <div class="info-item">
                        <span>Email:</span> ${email}
                      </div>
                      <div class="info-item">
                        <span>Message:</span>
                        <p>${message}</p>
                      </div>
                    </div>
                  </div>
                  <div class="footer">
                    <p>This message was sent from the NearSwipe website contact form.</p>
                    <p>&copy; 2024 NearSwipe. All rights reserved.</p>
                  </div>
                </div>
              </body>
              </html>
            `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Your message has been received. We will get back to you soon!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Failed to send email to admin" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
