const mongoose = require('mongoose');

const whatsappLogSchema = new mongoose.Schema({
    residentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    mobileNumber: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Sent'
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WhatsAppLog', whatsappLogSchema);