const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "aakiltayyab@gmail.com",
    pass: "eibaffthpjvlcnzz",
  }
});


async function sendMail(to, msg, subject, html = "") {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'aakiltayyab@gmail.com', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: msg,
    html // html body
  })

}

module.exports = sendMail