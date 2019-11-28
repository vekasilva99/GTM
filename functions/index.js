const functions = require('firebase-functions');
const admin = require ('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()

let authData = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'tuturoluis06@gmail.com',
        pass: 'tuturoluis'
    }
});

exports.sendEmailNotification = functions.firestore.document('submissions/{docId}')
.onCreate((snap, ctx)=>{

    const data = snap.data();
    
    authData.sendMail({
        from: 'info.truly@makethtapp.com',
        to: data.email,
        subject: 'Your submission Info',
        text: data.name + ', hola',
        html: data.name + ', hola'
    }).then(res=>console.log('Se ha enviado el correo!')).catch(err=>console.log(err)
);
});