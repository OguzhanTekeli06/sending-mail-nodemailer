const nodemailer = require("nodemailer");
require('dotenv').config();
async function sendEmail(fromEmail,toEmail,subject,html) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        secure: true,
        port: 465,
        host: 'smtp.gmail.com'
    });
    try{
        const info = await tranporter.sendMail({         
            from: process.env.EMAIL_USER,            // bizim mail
            to: toEmail,                                   //hedef mail ya da mailler
            subject: subject,
            html: html,
        })
        console.log("Message sent: %s", info.messageId);    
    }
    catch(error){
        console.error("mail gönderilemedi",error)
    };
}
// const html = ` 
//     <h1>html formatında da yollanabilir</h1>
// `;
// const fromEmail = process.env.EMAIL_USER
// const toEmail = 'oguz.tekeli.37@gmail.com'
// const subject = 'Hello'
sendEmail(fromEmail,toEmail,subject,html);
// const emails = [aaa,aaa,aaa]
// to: emails, ile toplu mail atılabilir

