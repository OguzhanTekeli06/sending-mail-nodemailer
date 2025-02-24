const nodemailer = require("nodemailer");

async function sendEmail(fromEmail,toEmail,subject,html) {

    const tranporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io ",                        // mailtrapten hesap açılıp buralar doldurulmalı ya da 
        port: 2525,
        secure: true,
        auth: {
            user: "user",
            pass: "pass"
        }
    });

    //const tranporter = nodemailer.createTransport({
    //    service: 'gmail',                        // gmail smptsi
    //    auth: {
    //        user: 'gmail adresin',
    //        pass: 'şifren'                       2FA etkinse ugulama şifresi
    //    }
    //});


    try{
        const info = await tranporter.sendMail({         
            from: 'Fred Foo <test@test.com> ',            // bizim mail
            to: 'test',                                   //hedef mail ya da mailler
            subject: 'Hello',
            html: html,
        })
        console.log("Message sent: %s", info.messageId);    

    }
    catch(error){
        console.error("mail gönderilemedi")
    };
    

    
}

const html = ` 
    <h1>html formatında da yollanabilir</h1>
`;
const fromEmail = 'test'
const toEmail = 'test'
const subject = 'Hello'

sendEmail(fromEmail,toEmail,subject,html);

// const emails = [aaa,aaa,aaa]
// to: emails, ile toplu mail atılabilir

