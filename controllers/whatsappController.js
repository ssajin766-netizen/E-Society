const sendWhatsApp = require('../services/whatsappService');
const WhatsAppLog = require('../models/WhatsAppLog');

exports.sendMessage = async (req, res) => {
    try {
        const { residentId, mobileNumber, message } = req.body;

        await sendWhatsApp(mobileNumber, message);

        await WhatsAppLog.create({
            residentId,
            mobileNumber,
            message,
            status: 'Sent'
        });

        res.json({
            success: true,
            message: 'WhatsApp sent successfully'
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: 'Failed to send message'
        });
    }
};