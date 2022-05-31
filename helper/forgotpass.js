const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host:`smtp.gmail.com`,
    port:587,
    send:false,
    requireTLS:true,
    auth:{
        user:`hiten.elsner@gmail.com`,
        pass:`elsner123`
    }
})
const mailOptions = {
    from:`hiten.elsner@gmail.com`,
    to:`parmarjenil.elsner@gmail.com`,
    subject:"Hello from tutorials",
    text:`forgot password`
}
transporter.sendMail(mailOptions, (error,info)=>{
    if(error){
        console.log(error)
    }
    else {
        console.log(`email send successfully`,info.response)
    }
})
