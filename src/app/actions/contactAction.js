"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
    try {
        // Validate environment variables first
        const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO'];
        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
        
        if (missingVars.length > 0) {
            return { 
                success: false, 
                error: "Missing environment variables", 
                details: `Missing: ${missingVars.join(', ')}` 
            };
        }

        const name = formData.get("cfName");
        const email = formData.get("cfEmail");
        const phone = formData.get("cfPhone");
        const subject = formData.get("cfSubject");
        const message = formData.get("cfMessage");

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Computyne" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: `New Contact Form - ${name}`,
            html: `
  <div style="font-family: Arial, Helvetica, sans-serif; color: #333; line-height: 1.6; font-size: 14px;">

    <h3 style="margin: 0 0 10px 0;">
      📩 Someone has reached out through your website contact form.
    </h3>

    <p style="margin: 0 0 12px 0;">
      The message details are provided below for your review.
    </p>

    <p style="margin: 4px 0;">
      <strong>Name:</strong> ${name || "-"}
    </p>

    <p style="margin: 4px 0;">
      <strong>Email:</strong> ${email || "-"}
    </p>

    <p style="margin: 4px 0;">
      <strong>Phone:</strong> ${phone || "-"}
    </p>

    <p style="margin: 4px 0;">
      <strong>Subject:</strong> ${subject || "-"}
    </p>

    <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 12px 0;" />

    <p style="margin: 0 0 6px 0;">
      <strong>Message:</strong>
    </p>

    <p style="margin: 0;">
      ${message?.replace(/\n/g, "<br />") || "-"}
    </p>

  </div>
`,
        });

        return { success: true };
    } catch (error) {
        console.error("Contact form error:", error);
        
        // Return specific error messages for debugging
        let errorMessage = "Failed to send message";
        
        if (error.code === "EAUTH") {
            errorMessage = "Authentication failed - Check SMTP credentials";
        } else if (error.code === "ECONNECTION") {
            errorMessage = "Connection failed - Check SMTP host and port";
        } else if (error.code === "ESOCKET") {
            errorMessage = "Socket error - Network connectivity issue";
        } else if (error.code === "ENOTFOUND") {
            errorMessage = "Host not found - Invalid SMTP host";
        } else if (error.message && error.message.includes("environment variables")) {
            errorMessage = "Missing environment variables - Check SMTP configuration";
        } else if (error.message) {
            errorMessage = error.message;
        }
        
        return { success: false, error: errorMessage, details: error.toString() };
    }
}
