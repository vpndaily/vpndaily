const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key : process.env.TRANSPORTER_API_KEY
    }
}))


module.exports = transporter
