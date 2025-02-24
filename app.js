const nodemailer = require("nodemailer");

const html = ` 
    <h1>html formatında da yollanabilir</h1>
`;

async function main() {

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
    //        pass: 'şifren'
    //    }
    //});


    const info = await tranporter.sendMail({         
        from: 'Fred Foo <test@test.com> ',            // bizim mail
        to: 'test',                                   //hedef mail ya da mailler
        subject: 'Hello',
        html: html,
    })
    console.log("Message sent: %s", info.messageId);    
}

main()
.catch(e => console.log(e));

// const emails = [aaa,aaa,aaa]
// to: emails, ile toplu mail atılabilir

