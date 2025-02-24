const nodemailer = require("nodemailer");
require('dotenv').config();

console.log(process.env.EMAIL_USER,process.env.EMAIL_PASS);

async function sendEmail(toEmail,subject,html) {            // hep aynı mail ile yollanacak ise fromEmail paramatresine gerk yok.gerek olsaydı from kısmına eklenirdi.
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        secure: true,
        port: 465,          //tls üzerinden doğrudan bağlantı içindir    //alternatif 587 ve secure false.
        host: 'smtp.gmail.com'         
    });
    try{
        const info = await transporter.sendMail({         
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
 const html = ` 
     <h1>html formatında da yollanabilir</h1>
 `;
const toEmail = 'oguz.tekeli.37@gmail.com'
const subject = 'Hello'
sendEmail(toEmail,subject,html);   
// const emails = [aaa,aaa,aaa]
// to: emails, ile toplu mail atılabilir

