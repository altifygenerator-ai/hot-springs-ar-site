import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function nl2br(value: string) {
  return value.replace(/\n/g, "<br />");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const formType = clean(body.formType) || "business";

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    /*
      SUGGESTION / UPDATE FORM
      Used for general suggestions, businesses to add, corrections, page ideas, etc.
    */
    if (formType === "suggestion") {
      const name = clean(body.name);
      const email = clean(body.email);
      const suggestionType = clean(body.suggestionType);
      const relatedBusiness = clean(body.relatedBusiness);
      const pageOrArea = clean(body.pageOrArea);
      const message = clean(body.message);

      if (!suggestionType || !message) {
        return NextResponse.json(
          {
            error: "Please choose a suggestion type and include a message.",
          },
          { status: 400 }
        );
      }

      const subject = `New Hot Springs Guide suggestion: ${suggestionType}`;

      const html = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2a24;">
          <h2>New guide suggestion / update</h2>

          <p><strong>Suggestion Type:</strong> ${suggestionType}</p>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Business or Place:</strong> ${
            relatedBusiness || "Not provided"
          }</p>
          <p><strong>Page or Area:</strong> ${pageOrArea || "Not provided"}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Suggestion:</strong></p>
          <p>${nl2br(message)}</p>
        </div>
      `;

      const text = `
New guide suggestion / update

Suggestion Type: ${suggestionType}
Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Business or Place: ${relatedBusiness || "Not provided"}
Page or Area: ${pageOrArea || "Not provided"}

Suggestion:
${message}
      `;

      const { error } = await resend.emails.send({
        from: "Natural State Tourism Project <contact@hometownwebservicesar.cc>",
        to: ["naturalstatetourismproject@gmail.com"],
        replyTo: email || "naturalstatetourismproject@gmail.com",
        subject,
        html,
        text,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Email could not be sent. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    /*
      BUSINESS LISTING / ADVERTISING FORM
      Existing form behavior.
    */
    const businessName = clean(body.businessName);
    const contactName = clean(body.contactName);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const businessType = clean(body.businessType);
    const website = clean(body.website);
    const location = clean(body.location);
    const listingType = clean(body.listingType);
    const message = clean(body.message);

    if (!businessName || !contactName || !email || !businessType) {
      return NextResponse.json(
        {
          error:
            "Please include your business name, name, email, and business type.",
        },
        { status: 400 }
      );
    }

    const subject = `New Hot Springs Guide listing request: ${businessName}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2a24;">
        <h2>New advertising / listing request</h2>

        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Listing Interest:</strong> ${
          listingType || "Not provided"
        }</p>
        <p><strong>Website/Facebook:</strong> ${website || "Not provided"}</p>
        <p><strong>Location/Service Area:</strong> ${
          location || "Not provided"
        }</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

        <p><strong>Message:</strong></p>
        <p>${message ? nl2br(message) : "No message provided."}</p>
      </div>
    `;

    const text = `
New advertising / listing request

Business Name: ${businessName}
Contact Name: ${contactName}
Email: ${email}
Phone: ${phone || "Not provided"}
Business Type: ${businessType}
Listing Interest: ${listingType || "Not provided"}
Website/Facebook: ${website || "Not provided"}
Location/Service Area: ${location || "Not provided"}

Message:
${message || "No message provided."}
    `;

    const { error } = await resend.emails.send({
      from: "Natural State Tourism Project <contact@hometownwebservicesar.cc>",
      to: ["naturalstatetourismproject@gmail.com"],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Email could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}