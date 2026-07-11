import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  if (process.env.NODE_ENV === "development") {
    // Ethereal catches the email — nothing is delivered to real inboxes
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });

    const info = await transporter.sendMail({
      from: `"Ink & Paper" <${testAccount.user}>`,
      to,
      subject,
      html,
    });

    console.log("Dev email preview:", nodemailer.getTestMessageUrl(info));
    return;
  }

  // Production — real SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  });
};

export default sendEmail;
