const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()

let authData= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'guacamayatours2020@gmail.com',
        pass: 'anvorguesa'
    }
});

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{

    const data=snap.data();
    //info.truly@makethatapp.com
    authData.sendMail({
        from: 'Guacamaya Tours guacamayatours2020@gmail.com',
        to: data.email,
        subject: 'Código de itinerario',
        text: 'Hola '+ data.name +'! Este es tu código de itinerario: hola men',
        html: 'Hola '+ data.name +'! Este es tu código de itinerario: hola men',
    }).then(res=>console.log('Succesfuly sent that mail')).catch(
        err=>console.log(err)
    );
})