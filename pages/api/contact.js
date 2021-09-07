const mailgun = require('mailgun-js');
const client = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

export default async function (req, res) {

    const data = {
        from: `${req.body.name} <${req.body.email}>`,
        to: 'OSDG IIITH <osdg@students.iiit.ac.in>',
        subject: 'Getting in touch',
        text: `Hey OSDG Admins! You have a mail from ${req.body.name}. It reads: \n\n${req.body.query}`
    };
    try {
        await new Promise((resolve, reject) => {
            client.messages().send(data, function (error, body) {
                if (error)
                    reject(error);
                else
                    resolve(body);

            });
        });
        return res.status(200).json({ status: 'OK' });
    }
    catch (e) {
        return res.status(500).json({ error: e });
    }
}
