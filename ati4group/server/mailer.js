import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sphinx4group@gmail.com',
        pass: 'htimjlgqazwgceds'
    }
});

const mailOptions = {
    from: 'sphinx4group@gmail.com',
    to: 'ceedje74@gmail.com',
    subject: 'Votre inscription APERODEV',
    text: 'Ceci est un test pour montrer que cela fonctionne bien',
    html: 'Coucou',
    attachDataUrls: true,//to accept base64 content in messsage
    html: 'Halo ini barcodenya </br> <img src="' + img + '">' // html body
};

transporter.sendMail(mailOptions, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé');
    }
});
