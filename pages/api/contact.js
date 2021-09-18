const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD
    },
});

export default async function (req, res) {

    const mailData = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: 'osdg@students.iiit.ac.in',
        subject: 'Getting in Touch',
        text: `Hey OSDG Admins! You have a mail from ${req.body.name}. It reads: \n\n${req.body.query}`,
        replyTo: req.body.email
    };

    try {
        await transporter.sendMail(mailData);
        return res.status(200).json({ status: 'OK' });
    } catch (e) {
        return res.status(500).json({ error: e });
    }
}