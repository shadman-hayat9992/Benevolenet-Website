import nodemailer from 'nodemailer';

const SendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Use Gmail SMTP
      port: 587,
      secure: false,
      auth: {
        user: "benevolenet436@gmail.com",
        pass: "oeex sjyw ojex anrw", // App password, NOT regular Gmail password
      },
    });

    const info = await transporter.sendMail({
      from: '"Benevolenet Team" <benevolenet436@gmail.com>',
      to: "zaidashraf249@gmail.com",
      subject: "Hello Abdul",
      text: "Kya haal hai...?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent:", info.messageId);
    res.json({ message: "Mail sent successfully", data: info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
};

export default SendMail;
