const twilio = require('twilio');

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const sendWhatsApp = async (phone, message) => {
    try {
        const response = await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: `whatsapp:${phone}`,
            body: message
        });

        return response;
    } catch (err) {
        console.log(err);
    }
};

module.exports = sendWhatsApp;